import { ErrorMapping } from '@/constants/error';

const ErrorMessageHandler = (serverErrorCode: null) => {
  if (!serverErrorCode) return 'خطا در برقراری ارتباط';
  const errorItem = ErrorMapping?.find((item) => item.code === serverErrorCode);
  return errorItem?.message || 'خطا در برقراری ارتباط';
};

export default ErrorMessageHandler;
