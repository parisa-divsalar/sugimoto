import Grid from '@mui/material/Grid2';
import { Box, Typography } from '@mui/material';
import { AdminInfoListType } from '@/pages/Dashboard';

interface GridDashboardItemProps {
  gridItem: AdminInfoListType;
}

const GridDashboardItem: React.FC<GridDashboardItemProps> = (props) => {
  const { gridItem } = props;
  const { label, value } = gridItem;

  return (
    <Grid size={6} display='flex' justifyContent='space-between' p={2}>
      <Box display='flex'>
        <Typography color='text.main'>{label}</Typography>
      </Box>

      <Typography color='text.main' fontWeight='bold' dir='ltr' fontSize=''>
        {value}
      </Typography>
    </Grid>
  );
};

export default GridDashboardItem;
