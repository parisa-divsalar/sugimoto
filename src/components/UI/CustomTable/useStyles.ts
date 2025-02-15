import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  mainTable: {
    width: 'calc(100% + 1rem)',
    paddingLeft: '0.5rem',
    left: '0',
    position: 'relative',

    '& .MuiTableBody-root': {
      '& > *:nth-child(odd)': {
        backgroundColor: theme.palette.grey.A100,
      },
      '& > *:nth-child(even)': {
        backgroundColor: theme.palette.grey.A200,
      },
    },
  },
  badge: {
    width: 'fit-content',
    padding: '0.2rem 0.75rem',
    borderRadius: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default useStyles;
