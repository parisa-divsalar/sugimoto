import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { useDispatch, useSelector } from 'react-redux';
import { snackbarSelector } from '@/store/common/commonSelector.ts';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { setSnackbar } from '@/store/common/commonSlice.ts';
import { IconButton } from '@mui/material';

const CustomSnackbar = () => {
  const dispatch = useDispatch();

  const snackbar = useSelector(snackbarSelector);
  const { message, openSnackbar } = snackbar || {};

  const handleClose = () => dispatch(setSnackbar({ openSnackbar: false, message: '' }));

  const action = (
    <React.Fragment>
      <IconButton
        size='small'
        aria-label='close'
        color='inherit'
        onClick={handleClose}
        sx={{ marginRight: '2rem' }}
      >
        <CloseRoundedIcon fontSize='small' />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Snackbar
      open={openSnackbar}
      autoHideDuration={5000}
      onClose={handleClose}
      message={message}
      action={action}
    />
  );
};

export default CustomSnackbar;
