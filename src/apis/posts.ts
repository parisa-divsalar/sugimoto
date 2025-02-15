import axios from 'axios';

export const getPosts = (shopName: string, page: number, per_page: number) =>
  axios.post(
    `/posts`,
    {
      page,
      per_page,
    },
    { headers: { 'x-shop-name': shopName } },
  );

export const getAdvertisements = (
  shopName: string,
  page: number,
  per_page: number,
) =>
  axios.post(
    `/advertisements`,
    {
      page,
      per_page,
    },
    { headers: { 'x-shop-name': shopName } },
  );

export const addAdvertisements = (
  startAt: string,
  endAt: string,
  msisdn: string,
  postUrl: string,
) => {
  return axios.post('/advertisements/create', {
    startAt,
    endAt,
    msisdn,
    postUrl,
  });
};

export const productDetails = (
  startAt: string,
  endAt: string,
  msisdn: string,
  postUrl: string,
) => {
  return axios.post('/post/EKcp/related', {
    startAt,
    endAt,
    msisdn,
    postUrl,
  });
};
