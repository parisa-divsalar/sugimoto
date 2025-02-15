import * as React from 'react';
import TextField from '@mui/material/TextField';
import { toEnglishNumber } from '@/utils/validation';

type inputModeType = 'tel' | 'numeric' | 'text' | undefined;
type variantType = 'outlined' | 'filled' | 'standard';
export type typeTextField = 'text' | 'password' | 'email' | 'numeric';

interface CustomInputProps {
  label?: string;
  placeholder?: string;
  value?: any;
  error?: boolean;
  variant?: variantType;
  maxLength?: number;
  helperText?: string;
  type?: typeTextField;
  inputMode?: inputModeType;
  InputProps?: any;
  disabled?: boolean;
  hidden?: boolean;
  onChangeHandler?: (value: any) => void;
  onEnter?: any;
  rows?: number;
  multiline?: boolean;
}

const CustomInput = (props: CustomInputProps) => {
  const {
    label = '',
    variant = 'outlined',
    placeholder = '',
    value,
    error = false,
    helperText = '',
    type = 'text',
    maxLength = 100,
    inputMode,
    disabled,
    hidden = false,
    multiline = false,
    rows = 1,
    onEnter,
    onChangeHandler,
  } = props;

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const value = event.target.value;

    if (inputMode === 'numeric' && /\D/g.test(toEnglishNumber(value))) return;
    onChangeHandler?.(inputMode === 'numeric' ? toEnglishNumber(value) : value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<any>) => {
    if (event.key === 'Enter') {
      onEnter?.();
    }
  };

  return (
    <TextField
      id='outlined-basic'
      variant={variant}
      placeholder={placeholder}
      fullWidth
      label={label}
      value={value}
      error={error}
      rows={rows}
      onChange={onChange}
      helperText={helperText}
      type={type}
      hidden={hidden}
      multiline={multiline}
      inputMode={inputMode}
      autoComplete='off'
      onKeyDown={handleKeyDown}
      disabled={disabled}
      inputProps={{
        maxLength: maxLength,
        autoComplete: 'new-password',
        form: {
          autocomplete: 'off',
        },
      }}
      {...props}
    />
  );
};

export default CustomInput;
