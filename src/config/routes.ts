export const publicRoutes = {
  login: '/auth/login',
};

export const privateRoutes = {
  dashboard: '/admin/dashboard',
  posts: '/admin/posts',
  product: '/admin/product/:id?',
  advertisements: '/admin/advertisements',
  changePassword: '/admin/change-password',
};

export const publicRouteList = Object.values(publicRoutes);

export const privateRouteList = Object.values(privateRoutes);

export const neverShowLayout = ['/', publicRoutes.login];
