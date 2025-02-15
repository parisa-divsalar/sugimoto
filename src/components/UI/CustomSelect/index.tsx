import { MenuItem, Box } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { selectOption } from '@/type/common.ts';
import { makeStyles } from '@mui/styles';
import useStyles from './useStyles.ts';

const useMakeStyles = makeStyles(() => ({
  selectRoot: {
    padding: '0 1rem',
  },
  root: {
    textAlign: 'center',
    padding: '0.75rem 1.5rem !important',
  },
}));

interface ICustomSelectProps {
  value: string;
  placeholder?: string;
  fullWidth?: boolean;
  options: selectOption[];
  onChange: (value: string) => void;
}

const CustomSelect = (props: ICustomSelectProps) => {
  const styles = useMakeStyles();
  const classes = useStyles();
  const { value, options = [], onChange, fullWidth = false, placeholder } = props;

  const handleChange = (event: SelectChangeEvent) => onChange(event.target.value);

  return (
    <Box className={classes.mainSelect}>
      <Select
        inputProps={{ 'aria-label': '' }}
        fullWidth={fullWidth}
        value={value}
        color='secondary'
        classes={{ root: styles.selectRoot }}
        onChange={handleChange}
        displayEmpty
      >
        <MenuItem value={value} disabled classes={{ root: styles.root }}>
          <em>{placeholder}</em>
        </MenuItem>

        {options.map(({ value, name }: selectOption) => (
          <MenuItem key={name} value={value} classes={{ root: styles.root }}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default CustomSelect;
