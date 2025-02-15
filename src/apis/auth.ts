import axios from 'axios';

export const login = (username: string, password: string) =>
  axios.post('/login', {
    username,
    password,
  });

export const changePassword = (password: string, newPassword: string) =>
  axios.post('/user/change-password', {
    password,
    new_password: newPassword,
  });
