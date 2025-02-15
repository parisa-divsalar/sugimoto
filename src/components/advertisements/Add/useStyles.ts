import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  mainDialog: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    minWidth: '620px',
  },
  header: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
    padding: '0.5rem',
  },
  fileContainer: {
    display: 'flex',
    width: '100%',
    borderRadius: '0.6rem',
    color: 'white',
    cursor: 'pointer',
    gap: '0.2rem',
    padding: '0.6rem 1rem',
  },
}));

export default useStyles;
