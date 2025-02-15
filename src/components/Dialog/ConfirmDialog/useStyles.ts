import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  mainDialog: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    minWidth: '320px',
  },
  header: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footer: {
    display: 'flex',
    gap: '1rem',
  },
}));

export default useStyles;
