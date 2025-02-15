import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  mainPagination: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: theme.palette.grey.A100,
    gap: '0.5rem',
    padding: '1rem',
    fontSize: '14px',
    marginTop: '0.5rem',
    borderRadius: '0.6rem',
  },
  pagination: {
    width: '100%',
  },
}));

export default useStyles;
