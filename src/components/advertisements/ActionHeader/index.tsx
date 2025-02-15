import { FunctionComponent, useState } from 'react';
import { Box, CardActionArea } from '@mui/material';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import SearchComponent from '@/components/advertisements/Search';
import AddAdvertisementsDialog from '@/components/advertisements/Add';
import useStyles from './useStyles';

interface UserActionHeaderProps {
  getAllAdvertisements: () => void;
}
const AdvertisementsActionHeader: FunctionComponent<UserActionHeaderProps> = (props) => {
  const classes = useStyles();
  const { getAllAdvertisements } = props;
  const [openAddAdvertisementsDialog, setOpenAddAdvertisementsDialog] = useState(false);

  return (
    <>
      <Box className={classes.mainHeader}>
        <SearchComponent getAllData={getAllAdvertisements} />

        <Box className='flexCenter' gap={1}>
          <CardActionArea
            className={classes.actionBox}
            onClick={() => setOpenAddAdvertisementsDialog(true)}
          >
            <AddRoundedIcon color='action' />
          </CardActionArea>

          <CardActionArea className={classes.actionBox} onClick={() => getAllAdvertisements()}>
            <RefreshRoundedIcon color='action' />
          </CardActionArea>
        </Box>
      </Box>

      <AddAdvertisementsDialog
        openAddAdvertisementsDialog={openAddAdvertisementsDialog}
        closeDialog={() => setOpenAddAdvertisementsDialog(false)}
        getAllAdvertisements={getAllAdvertisements}
      />
    </>
  );
};

export default AdvertisementsActionHeader;
