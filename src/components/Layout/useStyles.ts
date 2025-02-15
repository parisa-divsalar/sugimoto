import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  mainLayout: {
    width: '100%',
    margin: '0',
    paddingTop: '1rem',
    height: '100vh',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    transition: 'all ease 0.5s',
  },

  layoutContainer: {
    width: '100%',
    maxWidth: '1440px',
    margin: '0 auto',
    height: 'calc(100vh - 1rem)',
  },

  children: {
    position: 'relative',
    top: '86px',
    right: '286px',
    overflowY: 'auto',
    borderRadius: '0.75rem',
    width: 'calc(100% - 286px)',
    height: 'calc(100% - 102px)',
  },
}));

export default useStyles;
