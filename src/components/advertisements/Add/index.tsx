import { FunctionComponent, useState } from 'react';
import { Box, Typography, Dialog, IconButton, Divider } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid2';
import { useDispatch } from 'react-redux';
import useStyles from './useStyles.ts';
import CustomInput from '@/components/UI/CustomInput';
import CustomButton from '@/components/UI/CustomButton';
import { setSnackbar } from '@/store/common/commonSlice.ts';
import { msisdnValidation } from '@/utils/validation.ts';
import { addAdvertisements } from '@/apis/posts.ts';

const useMackStyles = makeStyles(() => ({
  paper: {
    direction: 'rtl',
    borderRadius: '1rem !important',
  },
}));

interface AddAdvertisementsDialogProps {
  openAddAdvertisementsDialog: boolean;
  closeDialog: () => void;
  getAllAdvertisements: () => void;
}

const AddAdvertisementsDialog: FunctionComponent<AddAdvertisementsDialogProps> = (props) => {
  const { openAddAdvertisementsDialog, getAllAdvertisements, closeDialog } = props;
  const styles = useMackStyles();
  const classes = useStyles();
  const dispatch = useDispatch();

  const [startAt, setStartAt] = useState('');
  const [endAt, setEndAt] = useState('');
  const [msisdn, setMsisdn] = useState('');
  const [msisdnError, setMsisdnError] = useState(false);
  const [postUrl, setPostUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const clearAllState = () => {
    setStartAt('');
    setEndAt('');
    setMsisdn('');
    setPostUrl('');
    if (msisdnError) setMsisdnError(false);
  };

  const onCloseAndResetDialog = () => {
    clearAllState();
    closeDialog();
  };

  const onSubmit = () => {
    setLoading(true);

    addAdvertisements(startAt, endAt, msisdn, postUrl)
      .then(() => {
        getAllAdvertisements();
        closeDialog();
        dispatch(setSnackbar({ openSnackbar: true, message: 'آگهی با موفقیت اضافه گردید' }));
      })
      .finally(() => setLoading(false));
  };


  return (
    <Dialog
      onClose={onCloseAndResetDialog}
      open={openAddAdvertisementsDialog}
      maxWidth='xl'
      classes={{ paper: styles.paper }}
    >
      <Box className={classes.mainDialog}>
        <Box className={classes.header}>
          <Typography color='text.main' fontWeight='bold'>
            ایجاد آگهی جدید
          </Typography>
          <IconButton onClick={onCloseAndResetDialog}>
            <CloseRoundedIcon color='action' />
          </IconButton>
        </Box>

        <Grid container spacing={1}>
          <Grid size={6}>
            <CustomInput
              label={startAt ? 'تاریخ شروع آگهی' : ''}
              placeholder='تاریخ شروع آگهی'
              value={startAt}
              onChangeHandler={(value) => setStartAt(value)}
            />
          </Grid>

          <Grid size={6}>
            <CustomInput
              label={endAt ? 'تاریخ پایان آگهی' : ''}
              placeholder='تاریخ پایان آگهی'
              value={endAt}
              onChangeHandler={(value) => setEndAt(value)}
            />
          </Grid>

          <Grid size={6}>
            <CustomInput
              label={postUrl ? 'لینک پست' : ''}
              placeholder='لینک پست'
              value={postUrl}
              onChangeHandler={(value) => setPostUrl(value)}
            />
          </Grid>

          <Grid size={6}>
            <CustomInput
              label={msisdn ? 'شماره همراه' : ''}
              placeholder='شماره همراه'
              value={msisdn}
              helperText={msisdnError ? 'شماره همراه اشتباه است.' : ''}
              maxLength={msisdn.startsWith('0') ? 11 : 10}
              error={msisdnError}
              inputMode='numeric'
              onChangeHandler={(value) => {
                setMsisdn(value);
                if (msisdnValidation(value) && value !== '') setMsisdnError(true);
                else setMsisdnError(false);
              }}
            />
          </Grid>
        </Grid>

        <Divider sx={{ marginTop: 2 }} />

        <Box className={classes.rowContainer}>
          <CustomButton disabled={false} loading={loading} onClick={onSubmit}>
            <Typography px={2}>ذخیره</Typography>
          </CustomButton>
        </Box>
      </Box>
    </Dialog>
  );
};

export default AddAdvertisementsDialog;
