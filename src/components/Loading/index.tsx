import * as React from 'react';
import { Box, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import { themeSelector } from '@/store/common/commonSelector.ts';

interface LoadingProps {
  fullHeight?: boolean;
}

const Loading: React.FC<LoadingProps> = (props) => {
  const { fullHeight } = props;
  const theme = useSelector(themeSelector);

  return (
    <main>
      <Box className={fullHeight ? 'mainLoading' : 'loadingContainer'}>
        <CircularProgress size={26} color={theme === 'light' ? 'primary' : 'inherit'} />
      </Box>
    </main>
  );
};

export default Loading;
