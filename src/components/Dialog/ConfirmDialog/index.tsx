import * as React from 'react';
import { Box, Typography, Dialog, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CustomButton from '../../UI/CustomButton';
import useStyles from './useStyles.ts';

const useMackStyles = makeStyles(() => ({
  paper: {
    direction: 'rtl',
    borderRadius: '1rem !important',
  },
}));

interface ConfirmDialogProps {
  openConfirmDialog: boolean;
  title: string;
  description: string;
  closeDialog: () => void;
  onSubmit: () => void;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = (props) => {
  const { openConfirmDialog, closeDialog, onSubmit, title = '', description = '' } = props;
  const styles = useMackStyles();
  const classes = useStyles();

  return (
    <Dialog
      onClose={closeDialog}
      open={openConfirmDialog}
      maxWidth='lg'
      classes={{ paper: styles.paper }}
    >
      <Box className={classes.mainDialog}>
        <Box className={classes.header}>
          <Typography color='text.main' fontWeight='bold'>
            {title}
          </Typography>
          <IconButton onClick={closeDialog}>
            <CloseRoundedIcon color='action' />
          </IconButton>
        </Box>

        <Box mb={2} mt={1}>
          <Typography>{description}</Typography>
        </Box>

        <Box className={classes.footer}>
          <CustomButton fullWidth variant='outlined' onClick={closeDialog}>
            انصراف
          </CustomButton>
          <CustomButton fullWidth onClick={onSubmit}>
            تایید
          </CustomButton>
        </Box>
      </Box>
    </Dialog>
  );
};

export default ConfirmDialog;
