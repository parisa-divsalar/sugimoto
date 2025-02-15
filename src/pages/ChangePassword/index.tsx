import { useState } from 'react';
import { Box, IconButton, InputAdornment, Typography } from '@mui/material';
import useStyles from '@/pages/ChangePassword/useStyles.ts';
import CustomInput, { typeTextField } from '@/components/UI/CustomInput';
import { changePassword } from '@/apis/auth.ts';
import { logout } from '@/apis/logout.ts';
import { useDispatch } from 'react-redux';
import { setSnackbar } from '@/store/common/commonSlice.ts';
import CustomButton from '@/components/UI/CustomButton';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const ChangePassword = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [password, setPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [type, setType] = useState<typeTextField>('password');
  const [loading, setLoading] = useState<boolean>(false);

  const disabled = newPassword === '' || password === '';

  const onSubmit = () => {
    if (!disabled) {
      setLoading(true);
      changePassword(password, newPassword)
        .then(() => {
          dispatch(
            setSnackbar({
              openSnackbar: true,
              message: 'رمز پنل ادمین با موفقیت تغییر گردید. لطفا مجددا وارد شوید',
            }),
          );

          setTimeout(() => {
            logout();
          }, 3_000);
        })
        .finally(() => setLoading(false));
    }
  };

  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.content}>
        <Typography color='text.main' mb={1}>
          لطفا فیلد های زیر رو برای تغییر رمز عبور وارد نمایید
        </Typography>

        <CustomInput
          label={password ? 'رمز عبور قبلی' : ''}
          placeholder='رمز عبور قبلی'
          value={password}
          type={type}
          onEnter={onSubmit}
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

        <CustomInput
          label={newPassword ? 'رمز عبور جدید' : ''}
          placeholder='رمز عبور جدید'
          value={newPassword}
          type={type}
          onEnter={onSubmit}
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
          onChangeHandler={(value) => setNewPassword(value)}
        />

        <Box mt={2} width='100%'>
          <CustomButton
            fullWidth
            variant='contained'
            disabled={disabled || loading}
            loading={loading}
            onClick={onSubmit}
          >
            تغییر رمز عبور
          </CustomButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ChangePassword;
