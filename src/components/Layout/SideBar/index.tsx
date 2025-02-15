import {
  Box,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Theme,
} from '@mui/material';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import ChromeReaderModeRoundedIcon from '@mui/icons-material/ChromeReaderModeRounded';
import AllInboxRoundedIcon from '@mui/icons-material/AllInboxRounded';
import { privateRoutes } from '@/config/routes.ts';
import { useLocation, useNavigate } from 'react-router-dom';
import { SideBarProps } from '@/type/common.ts';
import useStyles from '@/components/Layout/SideBar/useStyles.ts';
import { makeStyles } from '@mui/styles';


const useMakeStyles = makeStyles((theme: Theme) => ({
  menuRoot: {
    margin: '0.4rem 0 !important',
    padding: '0.5rem 0.8rem !important',

    '&:hover:not(.Mui-selected)': {
      borderRadius: '1.5rem !important',
      backgroundColor: theme.palette.mode === 'light' ? '#e9f0ff !important' : '#333',
    },
  },
  text: {
    color: theme.palette.mode === 'light' ? '#252525' : '#f2f2f2',
  },
  selected: {
    backgroundColor: `${theme.palette.primary.main} !important`,
    borderRadius: '1.5rem !important',

    '& span': {
      color: '#fff',
    },
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  const styles = useMakeStyles();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const sidebarItems: SideBarProps[] = [
    {
      id: '1',
      label: 'داشبورد',
      href: privateRoutes.dashboard,
      icon: (
        <DashboardRoundedIcon color={pathname === privateRoutes.dashboard ? 'inherit' : 'action'} />
      ),
      onClick: () => navigate(privateRoutes.dashboard),
    },
    {
      id: '2',
      label: 'محصولات',
      href: privateRoutes.posts,
      icon: <AllInboxRoundedIcon color={pathname === privateRoutes.posts ? 'inherit' : 'action'} />,
      onClick: () => navigate(privateRoutes.posts),
    },
    {
      id: '3',
      label: 'آگهی ها',
      href: privateRoutes.advertisements,
      icon: (
        <ChromeReaderModeRoundedIcon
          color={pathname === privateRoutes.advertisements ? 'inherit' : 'action'}
        />
      ),
      onClick: () => navigate(privateRoutes.advertisements),
    },
  ];

  return (
    <Box className={classes.mainSidebar}>

      <MenuList sx={{ width: '100%' }}>
        {sidebarItems.map((item: SideBarProps) => {
          return (
            <MenuItem
              selected={item.href === pathname}
              key={item.id}
              onClick={item?.onClick}
              classes={{
                root: styles.menuRoot,
                selected: styles.selected,
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText classes={{ root: styles.text }}>{item.label}</ListItemText>
            </MenuItem>
          );
        })}
      </MenuList>
    </Box>
  );
};

export default Sidebar;
