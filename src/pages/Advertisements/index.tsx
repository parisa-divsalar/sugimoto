import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { UserShopType } from '@/type/user.ts';
import CustomTable from '@/components/UI/CustomTable';
import CustomPagination from '@/components/UI/CustomPagination';
import { CellType } from '@/type/common.ts';
import { AdvertisementModel } from '@/type/post.ts';
import { useSelector } from 'react-redux';
import { selectUserShopSelector } from '@/store/user/userSelecor.ts';
import useStyles from '@/pages/Advertisements/useStyles.ts';
import AdvertisementsActionHeader from '@/components/advertisements/ActionHeader';

const Advertisements = () => {
  const classes = useStyles();

  const [currentPage, setCurrentPage] = useState(1);
	//@ts-ignore
  const [totalPages, setTotalPages] = useState(0);
	//@ts-ignore
  const [advertisementList, setAdvertisementList] = useState<AdvertisementModel[]>([]);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const selectUserShop: UserShopType = useSelector(selectUserShopSelector);

  const getAllAdvertisements = () => {


  };

  useEffect(() => {
    getAllAdvertisements();
  }, [currentPage, rowsPerPage, selectUserShop]);

  const tableHead = [
    {
      key: 'row',
      label: 'ردیف',
      type: CellType.ROW,
    },
    {
      key: 'start_at',
      label: 'تاریخ شروع',
      type: CellType.STRING,
    },
    {
      key: 'end_at',
      label: 'تاریخ پایان',
      type: CellType.STRING,
    },
    {
      key: 'phone',
      label: 'شماره همراه',
      type: CellType.STRING,
    },
    {
      key: 'post_url',
      label: 'لینک',
      type: CellType.STRING,
    },
  ];

  return (
    <Box className={classes.mainContainer}>
      <AdvertisementsActionHeader getAllAdvertisements={getAllAdvertisements} />

      <CustomTable
        rows={advertisementList}
        tableHead={tableHead}
        rowsIndex={totalPages === 1 ? 0 : rowsPerPage * (currentPage - 1)}
      />

      <CustomPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onChangeCurrentPage={(page: number) => setCurrentPage(page)}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={(rowsPerPage: number) => {
          if (currentPage !== 0) setCurrentPage(1);
          setRowsPerPage(rowsPerPage);
        }}
      />
    </Box>
  );
};

export default Advertisements;
