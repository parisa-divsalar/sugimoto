import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  mainContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.default,
    height: '100%',
    padding: '1rem',
  },
  header: {
    width: 'fit-content',
  },
	imageContainer: {
        display:"flex",
		justifyContent:"center",
		marginBottom:'40px'

  },
	imageContainerImg: {
        width:"70%",

  },
  details:{
	  display:'flex',
	  alignItems:"center",
	  marginTop:"10px"
  }
}));

export default useStyles;
