import * as React from 'react';
import { Checkbox, TableCell, TableRow } from '@mui/material';
import { useSelector } from 'react-redux';
import moment from 'moment-jalaali';
import { CellType, selectOption, TableHeadType } from '@/type/common.ts';
import commafy from '@/utils/commafyHelper.ts';
import { themeSelector } from '@/store/common/commonSelector.ts';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

interface CustomTableRowProps {
	tableHead: TableHeadType[];
	row: any;
	index: number;
	rowsIndex: number;
	hasSelect: boolean;
	setSelected?: (id: any) => void;
	selected?: number[];
}

const CustomTableRow = (props: CustomTableRowProps) => {
	const theme = useSelector(themeSelector);
	const { tableHead, row, index, selected = [], setSelected, hasSelect, rowsIndex = 0 } = props;
	const navigate = useNavigate(); // Initialize useNavigate

	const findAndTranslateValue = (value: any, options: selectOption[]) =>
		options.find((i: selectOption) => i.value === value)?.name || '---';

	const getCellValue = (key: string, type: CellType, options?: selectOption[], action?: any) => {
		let defaultValue = row?.[key] === 0 ? 0 : row?.[key] === null ? '' : row[key] || '---';

		if (type === CellType.ROW) defaultValue = rowsIndex + (index + 1);

		if (type === CellType.INFO)
			defaultValue =
				defaultValue?.toString().length > 50 ? '...' + defaultValue.slice(0, 50) : defaultValue;

		if (type === CellType.ACTION) defaultValue = action(row);

		if (type === CellType.ENUM && options)
			defaultValue = findAndTranslateValue(defaultValue, options);

		if (type === CellType.PRICE) defaultValue = commafy(defaultValue);

		if (type === CellType.FLOAT) defaultValue = defaultValue ? defaultValue.toFixed(2) : 0;

		if (type === CellType.MOBILE)
			defaultValue = (
				<a
					href={`tel:${defaultValue}`}
					style={{ textDecoration: 'none', color: theme === 'light' ? '#061d8b' : '#eaeaea' }}
				>
					{defaultValue}
				</a>
			);

		if (type === CellType.DATE) defaultValue = moment(defaultValue).format('jYYYY/jMM/jDD');

		if (type === CellType.REGISTER_DATE)
			defaultValue =
				defaultValue.slice(0, 4) + '/' + defaultValue.slice(4, 6) + '/' + defaultValue.slice(6, 8);

		return defaultValue;
	};

	const isSelected = (id: number) => selected?.indexOf(id) !== -1;

	const isItemSelected = isSelected(row.id);
	const labelId = `enhanced-table-checkbox-${index}`;

	const handleCheckboxClick = (_event: React.MouseEvent<unknown>, id: number) => {
		const selectedIndex = selected?.indexOf(id);
		let newSelected: number[] = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, id);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(
				selected.slice(0, selectedIndex),
				selected.slice(selectedIndex + 1),
			);
		}

		setSelected?.(newSelected);
	};

	const handleRowClick = () => {
		navigate(`/admin/product/${row.id}`);
	};

	return (
		<TableRow
			key={row.name}
			sx={{
				'&:last-child td, &:last-child th': { border: 0 },
				backgroundColor: isItemSelected ? '#f40' : '#f5f5f5',
				cursor: 'pointer',
			}}
			onClick={handleRowClick}
		>
			{hasSelect && (
				<TableCell padding='checkbox' onClick={(event) => handleCheckboxClick(event, row.id)}>
					<Checkbox
						color='primary'
						checked={isItemSelected}
						inputProps={{
							'aria-labelledby': labelId,
						}}
					/>
				</TableCell>
			)}

			{tableHead.map((item: TableHeadType) => {
				const { key, type, options, action } = item;
				return (
					<TableCell
						key={item.key}
						component='th'
						scope='row'
						align='right'
						dir='ltr'
						sx={{ cursor: 'pointer' }}
						onClick={handleRowClick}
					>
						{getCellValue(key, type, options, action)}
					</TableCell>
				);
			})}
		</TableRow>
	);
};

export default CustomTableRow;
