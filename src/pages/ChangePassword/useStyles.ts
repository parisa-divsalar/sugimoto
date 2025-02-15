import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: '1.5rem',
    backgroundColor: theme.palette.background.default,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
  },
}));

export default useStyles;
