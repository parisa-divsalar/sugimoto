import { Button, CircularProgress } from '@mui/material';

type colorType = 'primary' | 'error' | 'secondary' | 'inherit';
type variantType = 'outlined' | 'contained' | 'text';
type sizeType = 'large' | 'small' | 'medium';
type buttonType = 'submit' | 'button';

interface PrimaryButtonProps {
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  color?: colorType;
  startIcon?: any;
  endIcon?: any;
  variant?: variantType;
  fullWidth?: boolean;
  size?: sizeType;
  type?: buttonType;
  children?: any;
  theme?: 'default';
}

const CustomButton = (props: PrimaryButtonProps) => {
  const {
    text = '',
    variant = 'contained',
    size,
    type,
    disabled,
    loading,
    color,
    startIcon,
    endIcon,
    onClick,
    fullWidth,
    children,
  } = props;

  return (
    <Button
      variant={variant}
      onClick={onClick}
      type={type}
      color={color}
      fullWidth={fullWidth}
      startIcon={!loading && startIcon}
      endIcon={!loading && endIcon}
      size={size}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <CircularProgress size={18} color='inherit' /> : text || children}
    </Button>
  );
};

export default CustomButton;
