import * as React from 'react';
import {
  Box,
  Checkbox,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Theme,
  Typography,
} from '@mui/material';
import CustomTableRow from './CustomTableRow';
import { makeStyles } from '@mui/styles';
import UpcomingRoundedIcon from '@mui/icons-material/UpcomingRounded';
import { TableHeadType } from '@/type/common.ts';
import useStyles from './useStyles.ts';

const useMackStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.info.main,
  },
  tableRowRoot: {
    backgroundColor: theme.palette.background.paper,
  },
}));

type tableSize = 'small' | 'medium';
interface CustomTableProps {
  rows: any[];
  tableHead: TableHeadType[];
  selected?: number[];
  loading?: boolean;
  rowsIndex?: number;
  size?: tableSize;
  setSelected?: (id: any) => void;
}

const CustomTable = (props: CustomTableProps) => {
  const classes = useStyles();
  const styles = useMackStyles();
  const { rows, tableHead, selected, setSelected, size = 'medium', loading, rowsIndex = 0 } = props;
  const numSelected = selected?.length || 0;
  const rowCount = rows.length;

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected?.(newSelected);
      return;
    }
    setSelected?.([]);
  };

  return (
    <Box className={classes.mainTable}>
      <TableContainer component={Paper}>
        <Table aria-label='simple table' size={size}>
          <TableHead classes={{ root: styles.root }}>
            <TableRow>
              {selected && (
                <TableCell padding='checkbox'>
                  <Checkbox
                    color='secondary'
                    indeterminate={numSelected > 0 && numSelected < rowCount}
                    checked={rowCount > 0 && numSelected === rowCount}
                    onChange={handleSelectAllClick}
                    inputProps={{
                      'aria-label': 'select all desserts',
                    }}
                  />
                </TableCell>
              )}

              {tableHead.map(({ label, key }: TableHeadType) => (
                <TableCell key={key} align='right'>
                  {label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow classes={{ root: styles.tableRowRoot }}>
                <TableCell
                  align='center'
                  colSpan={selected ? tableHead.length + 1 : tableHead.length}
                  sx={{ height: '50vh' }}
                >
                  <Box className='flexCenter' gap={0.5}>
                    <CircularProgress size={18} color='primary' />
                  </Box>
                </TableCell>
              </TableRow>
            ) : (
              <>
                {rows.length === 0 && (
                  <TableRow classes={{ root: styles.tableRowRoot }}>
                    <TableCell
                      align='center'
                      colSpan={selected ? tableHead.length + 1 : tableHead.length}
                      sx={{ padding: '4rem 0' }}
                    >
                      <Box className='flexCenter' gap={0.5}>
                        <UpcomingRoundedIcon />
                        <Typography color='text.main'>داده ایی برای نمایش وجود ندارد</Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                )}
                {rows.map((row, index: number) => (
                  <CustomTableRow
                    key={row.id}
                    index={index}
                    rowsIndex={rowsIndex}
                    row={row}
                    tableHead={tableHead}
                    selected={selected}
                    hasSelect={!!selected}
                    setSelected={setSelected}
                  />
                ))}
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CustomTable;
