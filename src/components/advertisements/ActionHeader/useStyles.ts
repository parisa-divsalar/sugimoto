import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  mainHeader: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 0',
  },

  actionBox: {
    display: 'flex !important',
    alignItems: 'center !important',
    borderRadius: '0.5rem !important',
    padding: '0.4rem !important',
    border: '1px solid #DCDFE1 !important',
  },
}));

export default useStyles;
