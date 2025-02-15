import axios from 'axios';

export const getDashboardInfo = (shopName: string) =>
  axios.get('/dashboard/info', { headers: { 'x-shop-name': shopName } });

export const getDashboardStatistics = (shopName: string) =>
  axios.get('/dashboard/statistics', { headers: { 'x-shop-name': shopName } });
