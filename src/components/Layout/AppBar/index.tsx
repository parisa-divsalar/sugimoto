import {
  Avatar,
  Box,
  IconButton,
  MenuItem,
  MenuList,
  Popover,
  Typography,
} from '@mui/material';
import { typeMappingHandler } from '@/constants/keysMapping.ts';
import PowerSettingsNewRoundedIcon from '@mui/icons-material/PowerSettingsNewRounded';
import { useLocation, useNavigate } from 'react-router-dom';
import { setTheme } from '@/store/common/commonSlice.ts';
import KeyIcon from '@mui/icons-material/Key';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useDispatch, useSelector } from 'react-redux';
import { themeSelector } from '@/store/common/commonSelector.ts';
import useStyles from '@/components/Layout/AppBar/useStyles.ts';
import { logout } from '@/apis/logout.ts';
import { privateRoutes } from '@/config/routes.ts';
import { useState } from 'react';
import { UserShopType } from '@/type/user.ts';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { selectUserShopSelector, userShopsSelector } from '@/store/user/userSelecor.ts';
import { makeStyles } from '@mui/styles';
import { setSelectUserShop } from '@/store/user/userSlice.ts';

const useMackStyles = makeStyles(() => ({
  root: {
    borderRadius: '0.875rem',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  },
  menuList: {
    width: '232px',
  },
}));

const AppBar = () => {
  const classes = useStyles();
  const styles = useMackStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const theme = useSelector(themeSelector);
  const userShops = useSelector(userShopsSelector);
  const selectUserShop: UserShopType = useSelector(selectUserShopSelector);

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleClick = (event: any) => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  const open = Boolean(anchorEl);
  const id = open ? 'popover-id' : undefined;
//@ts-ignore
  const UserShopHeader = (
    <Box display='flex'>
      {selectUserShop && (
        <Box
          aria-describedby={id}
          className={classes.avatarContainer}
          onClick={(e: any) => handleClick(e)}
        >
          <Avatar src={selectUserShop?.profile_image} sx={{ width: 32, height: 32 }} />

          <Typography color='text.main'>{selectUserShop?.name_persian}</Typography>

          {open ? (
            <ExpandLessIcon color='action' className={classes.arrow} />
          ) : (
            <ExpandMoreIcon color='action' className={classes.arrow} />
          )}
        </Box>
      )}

      <Popover
        id='user'
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        classes={{
          paper: styles.root,
        }}
      >
        <MenuList classes={{ root: styles.menuList }}>
          {userShops?.map((i: UserShopType) => (
            <MenuItem
              sx={{
                gap: '0.5rem',
                padding: '0.875rem 0.5rem',
                direction: 'rtl',
                backgroundColor: selectUserShop.name === i.name ? '#0C6AB0' : 'transparent',
              }}
              key={i.name}
              disabled={selectUserShop.name === i.name}
              onClick={() => {
                dispatch(setSelectUserShop(i));
                handleClose();
              }}
            >
              <Avatar src={i.profile_image} sx={{ width: 24, height: 24 }} />
              <Typography color='text.main'>{i.name}</Typography>
            </MenuItem>
          ))}
        </MenuList>
      </Popover>
    </Box>
  );

  return (
    <Box className={classes.mainAppbar}>
      <Typography fontSize='large' color='text.main'>
        {typeMappingHandler(pathname).message}
      </Typography>

      <Box className={classes.actionContainer}>

        <IconButton onClick={() => navigate(privateRoutes.changePassword)}>
          {theme === 'light' ? <KeyIcon color='action' /> : <KeyIcon color='action' />}
        </IconButton>

        <IconButton onClick={() => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))}>
          {theme === 'light' ? <DarkModeIcon color='action' /> : <LightModeIcon color='action' />}
        </IconButton>

        <IconButton onClick={() => logout()}>
          <PowerSettingsNewRoundedIcon color='action' />
        </IconButton>
      </Box>
    </Box>
  );
};

export default AppBar;
