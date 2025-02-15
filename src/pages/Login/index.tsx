import { useState } from 'react';
import { Box, IconButton, InputAdornment, Typography } from '@mui/material';
import useStyles from '@/pages/Login/useStyles.ts';
import CustomButton from '@/components/UI/CustomButton';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CustomInput, { typeTextField } from '@/components/UI/CustomInput';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useDispatch, useSelector } from 'react-redux';
import packageJSON from '../../../package.json';
import { themeSelector } from '@/store/common/commonSelector.ts';
import { setTheme } from '@/store/common/commonSlice.ts';
import { setToken } from '@/store/user/userSlice.ts';
import { privateRoutes } from '@/config/routes.ts';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useSelector(themeSelector);
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [type, setType] = useState<typeTextField>('password');
  const [loading, setLoading] = useState<boolean>(false);

  async function handleSubmit() {
    setLoading(true);
	if(userName === "test" && password === '123456') {
		dispatch(setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTc0MjE5NzUyNiwibmJmIjoxNzM5NjA1NTI2LCJpYXQiOjE3Mzk2MDU1MjYsImp0aSI6ImYxZGRlNWE3LTY2MzktNDBlNy1iYWYwLTNjY2E5NjhlNDEyYiJ9.MeLGrIEwf6CNOl0goOe4gXb3TLKHc3iiah82d8D2uN8"));
		navigate(privateRoutes.dashboard);

 		setLoading(false);
	} else {
		setLoading(false);
	}
  }

  const disabled = userName === '' || password === '';

  return (
    <Box className={classes.mainLoginContainer}>
      <Box className={classes.loginCard}>
        <Box className='fadeInRightAnimation'>
          <Box className={classes.fabContainer}>
            <IconButton onClick={() => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))}>
              {theme === 'light' ? (
                <DarkModeIcon color='action' />
              ) : (
                <LightModeIcon color='action' />
              )}
            </IconButton>
          </Box>

          <Box className=''>
            <Typography fontWeight='bold' fontSize='large' color='text.main'>
              ورود به پنل ادمین تستی
            </Typography>
            <Typography mt={1} mb={2} color='grey.light'>
              لطفا نام کاربری و رمز عبور خود را وارد کنید
            </Typography>

            <CustomInput
              label={userName ? 'نام کاربری' : ''}
              placeholder='نام کاربری'
              value={userName}
              maxLength={5}
              onChangeHandler={(value) => setUserName(value)}
            />

            <CustomInput
              label={password ? 'رمز عبور' : ''}
              placeholder='رمز عبور'
              value={password}
              type={type}
              onEnter={handleSubmit}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    {type === 'password' ? (
                      <IconButton onClick={() => setType('text')}>
                        <VisibilityOffIcon sx={{ color: '#6A6E73' }} />
                      </IconButton>
                    ) : (
                      <IconButton onClick={() => setType('password')}>
                        <VisibilityIcon sx={{ color: '#6A6E73' }} />
                      </IconButton>
                    )}
                  </InputAdornment>
                ),
              }}
              onChangeHandler={(value) => setPassword(value)}
            />

            <Box mt={2} width='100%'>
              <CustomButton
                fullWidth
                variant='contained'
                disabled={disabled || loading}
                loading={loading}
                onClick={handleSubmit}
              >
                ادامه
              </CustomButton>
            </Box>
          </Box>
        </Box>

        <Box className='fadeInLeftAnimation' />
      </Box>

      <Box className={classes.copyRightContainer}>
        <Typography color='grey.light'>
          {`۱۴۰۳ © کلیه حقوق این سایت متعلق به شرکت تستی است.  (v${packageJSON?.version})`}
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
