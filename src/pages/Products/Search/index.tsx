import { FunctionComponent, useState } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Box, IconButton, InputAdornment } from '@mui/material';
import { validateDigit } from '@/utils/validation.ts';
import CustomInput from '@/components/UI/CustomInput';
import useStyles from './useStyles.ts';

interface SearchComponentProps {
  label: string;
  getAllData: (name?: string) => void;
}

const SearchComponent: FunctionComponent<SearchComponentProps> = (props) => {
  const { getAllData, label = 'نام' } = props;
  const classes = useStyles();

  const [name, setName] = useState('');

  const onClickSearchIcon = () => getAllData(name);

  return (
    <Box className={classes.mainContainer}>
      <CustomInput
        label={name ? label : ''}
        placeholder={label}
        value={name}
        maxLength={20}
        onEnter={onClickSearchIcon}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton onClick={onClickSearchIcon}>
                <SearchRoundedIcon color='action' />
              </IconButton>
            </InputAdornment>
          ),
        }}
        onChangeHandler={(value) => {
          const ignore = validateDigit(value);
          if (ignore) setName(value);
          if (!value) getAllData();
        }}
      />
    </Box>
  );
};

export default SearchComponent;
