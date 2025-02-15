import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Dashboard, Products, ChangePassword, Advertisements } from '@/pages';
import { privateRoutes } from '@/config/routes.ts';
import ProductDetails from '@/pages/ProductDetails';

const PrivateRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={privateRoutes.dashboard} element={<Dashboard />} />
      <Route path={privateRoutes.posts} element={<Products />} />
      <Route path={privateRoutes.product} element={<ProductDetails />} />
      <Route path={privateRoutes.advertisements} element={<Advertisements />} />
      <Route path={privateRoutes.changePassword} element={<ChangePassword />} />
    </Routes>
  );
};

export default PrivateRoutes;
