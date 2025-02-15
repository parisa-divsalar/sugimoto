import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  mainSidebar: {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'calc(100% - 2rem)',
    width: '270px',
    overflowY: 'auto',
    backgroundColor: theme.palette.background.default,
    borderRadius: '1rem',
    padding: '2rem 1rem',
  },
}));

export default useStyles;
