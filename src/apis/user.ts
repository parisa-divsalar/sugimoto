import axios from 'axios';
import { StatusTypes } from '@/type/common.ts';

export const getAdminInfo = () => axios.post('/user/info');
export const getUserShops = () => axios.post('/user/shops');

export const getUsers = (
  currentPage: number,
  rowsPerPage: number,
  status: StatusTypes,
  search?: string,
) =>
  axios.get(
    `users?page=${currentPage}&limit=${rowsPerPage}${search ? `&search=${search}` : ''}&status=${status}`,
  );

export const addUser = (
  name: string,
  lastName: string,
  email: string,
  password: string,
  mobileNumber: string,
) => {
  return axios.post('users/create', {
    name,
    lastName,
    email,
    password,
    mobileNumber,
  });
};

export const updateUser = (
  id: number | undefined,
  name: string,
  lastName: string,
  email: string,
  password: string,
  mobileNumber: string,
) => {
  return axios.put(`users/update?user=${id}`, {
    name,
    lastName,
    email,
    password,
    mobileNumber,
  });
};

export const bulkUsers = (users: number[]) =>
  axios.put('users/bulk-remove', {
    users,
  });

export const activateUsers = (users: number[]) =>
  axios.put('users/activate', {
    users,
  });
