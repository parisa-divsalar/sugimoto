import * as React from 'react';
import { useEffect } from 'react';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import AppBar from '@/components/Layout/AppBar';
import Sidebar from '@/components/Layout/SideBar';
import { neverShowLayout } from '@/config/routes.ts';
import useStyles from '@/components/Layout/useStyles.ts';


const Layout = ({ children }: { children: React.ReactNode }) => {
  const classes = useStyles();
  const { pathname } = useLocation();

  const getInitialData = () => {
    // getAdminInfo().then((res) => dispatch(setUserInfo({ ...res })));

    // getUserShops().then((res) => {
    //   const userShops = res?.data;
    //   dispatch(setUserShops(userShops));
	//
    //   if (userShops && userShops.length > 0) {
    //     setTimeout(() => {
    //       dispatch(setSelectUserShop(userShops[0]));
    //     }, 500);
    //   }
    // });
  };

  useEffect(() => {
    getInitialData();
  }, []);

  if (neverShowLayout.includes(pathname)) return <main className='main-layout'>{children}</main>;

  return (
    <main className={classes.mainLayout}>
      <Box className={classes.layoutContainer}>
        <AppBar />
        <Sidebar />
        <Box className={classes.children}>{children}</Box>
      </Box>
    </main>
  );
};

export default Layout;
