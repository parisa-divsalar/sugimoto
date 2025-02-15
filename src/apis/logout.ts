import storage from 'redux-persist/lib/storage';

export const logout = async () => {
  localStorage.clear();
  await storage.removeItem('persist:root');
  window.location.reload();
};
