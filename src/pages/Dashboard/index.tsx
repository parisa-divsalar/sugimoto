import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import useStyles from '@/pages/Dashboard/useStyles.ts';
import Grid from '@mui/material/Grid2';

import { typeMappingHandler } from '@/constants/keysMapping.ts';
import GridDashboardItem from '@/pages/Dashboard/GridItem';


export type AdminInfoListType = {
  id: string;
  label: string;
  value: any;
};

const AdminKeys: string[] = [
  'bookmarks',
  'click_order',
  'copy_contact',
  'images',
  'products',
  'products_view',
  'shop_view',
  'videos',
];

const Dashboard = () => {
  const classes = useStyles();
  const [adminInfoList, setAdminInfoList] = useState<AdminInfoListType[]>([]);


  let response = {
	  "products": 89,
	  "images": 580,
	  "videos": 0,
	  "shop_view": 14,
	  "products_view": 21,
	  "bookmarks": 2,
	  "click_order": 1,
	  "copy_contact": 1
  }

  const getDashboardData = () => {
	  let tempArray: AdminInfoListType[] = [];

	  const data: any = {  ...response };

	  AdminKeys.forEach((key: string, index: number) => {
		  tempArray.push({
			  id: index.toString(),
			  label: typeMappingHandler(key).message,
			  value: data?.[key],
		  });
	  });
	  setAdminInfoList(tempArray);
  };

  useEffect(() => {
     getDashboardData();
  }, []);

  return (
    <Box className={classes.mainDashboard}>
      <Typography color='text.main'>اطلاعات داشبورد</Typography>

      {

        <Grid container columns={12} spacing={2} className={classes.gridContainer}>
          {adminInfoList.map((row: AdminInfoListType) => (
            <GridDashboardItem gridItem={row} key={row.id} />
          ))}
        </Grid>
      }
    </Box>
  );
};

export default Dashboard;
