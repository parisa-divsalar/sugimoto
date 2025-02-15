import * as React from 'react';
import { useEffect, useRef } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isAuthenticatedSelector } from '@/store/user/userSelecor.ts';
import { Login } from '@/pages';
import { privateRouteList, privateRoutes, publicRouteList, publicRoutes } from '@/config/routes.ts';
import PrivateRoutes from '@/config/privateRoutes.tsx';
import Layout from '@/components/Layout';

const App: React.FC = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const { pathname } = useLocation();
  const isAuth = useSelector(isAuthenticatedSelector);

  useEffect(() => {
    // @ts-ignore
    scrollRef.current?.scrollIntoView?.({ behavior: 'smooth' });
  }, [pathname]);

  useEffect(() => {
    if (pathname === '/') navigate(isAuth ? privateRoutes.dashboard : publicRoutes.login);
  }, [isAuth]);

  useEffect(() => {
    if (!isAuth && !publicRouteList.includes(pathname)) {
      navigate(publicRoutes.login, { replace: true });
    }
    if (isAuth && !privateRouteList.includes(pathname)) {
      navigate(privateRoutes.dashboard, { replace: true });
    }
  }, [isAuth]);

  return (
    <>
      <div ref={scrollRef} />

      {isAuth ? (
        <Layout>
          <PrivateRoutes />
        </Layout>
      ) : (
        <Routes>
          <Route path={publicRoutes.login} element={<Login />} />
        </Routes>
      )}
    </>
  );
};

export default App;
