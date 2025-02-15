import * as React from 'react';
import { Box, Pagination } from '@mui/material';
import { selectOption } from '@/type/common.ts';
import CustomSelect from '@/components/UI/CustomSelect';
import useStyles from './useStyles';

const RowsPerPageOption: selectOption[] = [
  {
    name: '10',
    value: '10',
  },
  {
    name: '25',
    value: '25',
  },
  {
    name: '50',
    value: '50',
  },
  {
    name: '100',
    value: '100',
  },
];

interface PrimaryButtonProps {
  currentPage: number;
  totalPages: number;
  onChangeCurrentPage: (page: number) => void;
  setRowsPerPage?: (rowsPerPage: number) => void;
  rowsPerPage?: number;
}

const CustomPagination = (props: PrimaryButtonProps) => {
  const classes = useStyles();
  const {
    currentPage = 1,
    totalPages = 1,
    onChangeCurrentPage,
    rowsPerPage,
    setRowsPerPage,
  } = props;

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log({ event });
    onChangeCurrentPage(value);
  };

  return (
    <Box className={classes.mainPagination}>
      <Box className={classes.pagination}>
        <Pagination
          count={totalPages}
          page={currentPage}
          variant='outlined'
          color='primary'
          onChange={handleChange}
        />
      </Box>

      {rowsPerPage && (
        <CustomSelect
          value={rowsPerPage.toString()}
          onChange={(value: string) => setRowsPerPage?.(parseInt(value, 10))}
          options={RowsPerPageOption}
        />
      )}
    </Box>
  );
};

export default CustomPagination;
