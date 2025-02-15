import axios from 'axios';
import store from '@/store/store';
// import ErrorMessageHandler from '@/utils/errorMessageHandler';
import { setSnackbar } from '@/store/common/commonSlice.ts';
import { logout } from '@/apis/logout';

const getBaseApi = import.meta.env.VITE_APP_BASE_API;

// lookUpMode = START | END | INCLUDE
const withoutToastRequests = [
  {
    key: '/confirm',
    method: 'put',
    resultCodes: '*',
    message: '',
    lookUpMode: 'END',
  },
];

const requestTimeoutList = {
  timeout: 1_000,
  urls: [],
};

const requestTimer = {
  requestTimeByMiliSecond: 0,
  start() {
    this.requestTimeByMiliSecond = new Date().getTime();
  },
  stop() {
    return new Date().getTime() - this.requestTimeByMiliSecond;
  },
};

const fallbackProcessIfRefreshTokenHasFailed = () => {
  // store.dispatch(toggleAuth());
  // window.location = `${process.env.PUBLIC_URL}/`;
};

const configAxios = () => {
  axios.interceptors.request.use(
    async (config) => {
      requestTimer.start();

      const { token } = store.getState().user;

      const newConfig = { ...config };

      newConfig.baseURL = getBaseApi;
      if (token) {
        newConfig.headers.Authorization = `Bearer ${token}`;
      }

      const url = newConfig.url || '';

      if (url.includes('admins/set_logo')) {
        newConfig.headers['Content-Type'] = 'multipart/form-data';
      } else newConfig.headers['Content-Type'] = 'application/json';

      return newConfig;
    },
    (error) => Promise.reject(error),
  );

  axios.interceptors.response.use(
    // @ts-ignore
    async (response: any) => {
      const requestUrl = response?.config?.url;
      const requestTime = requestTimer.stop();

      const getRealResponse = () => {
        return response?.data || response;
      };

      const dataPromise = new Promise((resolve) => {
        const reqUrlInTimeOuts: any = requestTimeoutList.urls.find((item: any) =>
          item.url.includes(requestUrl),
        );
        if (
          (reqUrlInTimeOuts && !reqUrlInTimeOuts?.method) ||
          (reqUrlInTimeOuts?.method &&
            reqUrlInTimeOuts?.method.toLowerCase() === response.config.method.toLowerCase())
        ) {
          const timeOut = reqUrlInTimeOuts?.timeout || requestTimeoutList.timeout;
          setTimeout(() => {
            resolve(getRealResponse());
          }, timeOut - requestTime);
        } else {
          resolve(getRealResponse());
        }
      });

      return await dataPromise;
    },
    (err) => {
      const originalRequest = err.config;
      if (err?.response?.status === 401) logout();

      if (err?.response?.status === 403) {
        fallbackProcessIfRefreshTokenHasFailed();
      }

      const toastChecker: any = withoutToastRequests.find((req) => {
        if (req.lookUpMode) {
          if (req.lookUpMode === 'END') return originalRequest?.url.endsWith(req.key);
          else if (req.lookUpMode === 'START') return originalRequest?.url.startsWith(req.key);
        }
        return originalRequest?.url.includes(req.key);
      });

      const originalRequestErrorCode =
        err?.response?.data?.status_code || err?.response?.data?.statusCode;

      const errorMessage = err?.response?.data?.message;

      const originalRequestStatusCode = err?.response?.data?.status?.code;

      if (!err.config) return;
      if (
        toastChecker &&
        (toastChecker.resultCodes === '*' ||
          toastChecker.statusCodes === '*' ||
          toastChecker.resultCodes?.includes(originalRequestErrorCode) ||
          toastChecker.statusCodes?.includes(originalRequestStatusCode)) &&
        (!toastChecker.method || toastChecker.method === originalRequest.method)
      ) {
        return Promise.reject({
          whiteListMessage: toastChecker?.message,
          code: originalRequestErrorCode,
          message: originalRequestErrorCode,
        });
      }

      if (errorMessage) store.dispatch(setSnackbar({ openSnackbar: true, message: errorMessage }));

      return Promise.reject(err);
    },
  );
};

configAxios();
