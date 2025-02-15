import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  mainAppbar: {
    position: 'fixed',
    left: 'calc(50% - 720px)',
    height: '70px',
    width: 'calc(1440px - 286px)',
    borderRadius: '0.75rem',
    backgroundColor: theme.palette.background.default,
    padding: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  arrow: {
    transition: 'all ease 0.8s',
  },

  avatarContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    cursor: 'pointer',
  },

  actionContainer: {
    display: 'flex',
    gap: '0.5rem',
  },
}));

export default useStyles;
