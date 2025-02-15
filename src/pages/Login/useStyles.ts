import { makeStyles } from '@mui/styles';
import bgLogin from '@/assets/images/bg/bg-login.png';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  mainLoginContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100vh',
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    transition: 'all ease 0.5s',
  },

  loginCard: {
    display: 'flex',
    borderRadius: '2rem',
    position: 'relative',
    width: '1100px',
    height: 'calc(100vh - 25%)',

    '& >:first-child': {
      height: '100%',
      flex: '0 0 50%',
      borderRadius: '0 2rem 2rem 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 6rem',
      position: 'relative',
      backgroundColor: theme.palette.background.default,
    },

    '& >:nth-child(2)': {
      flex: '0 0 50%',
      height: '100%',
      borderRadius: '2rem 0 0 2rem',
      background: `${theme.palette.mode === 'light' ? '#c1dbf1' : '#3C69A8'} url(${bgLogin}) center no-repeat`,
      backgroundSize: '80%',
      position: 'relative',
    },
  },

  fabContainer: {
    position: 'absolute',
    right: '1.5rem',
    top: '1.5rem',
  },

  copyRightContainer: {
    marginTop: '1.5rem',

    '& *': {
      fontWeight: 'normal',
      fontSize: '.75rem !important',
    },
  },
}));

export default useStyles;
