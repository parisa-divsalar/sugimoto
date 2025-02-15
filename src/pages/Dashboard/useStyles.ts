import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  mainDashboard: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    padding: '1.5rem',
    backgroundColor: theme.palette.background.default,
  },

  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },

  gridContainer: {
    padding: '1rem',
    borderRadius: '0.6rem',
    backgroundColor: theme.palette.background.paper,
    marginTop: '1rem',
  },
}));

export default useStyles;
