import { Suspense } from 'react';
import App from './App.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createRoot } from 'react-dom/client';
import store, { persistor } from '@/store/store';
import MuiThemeProvider from '@/components/MuiThemeProvider';
import { CssBaseline } from '@mui/material';
import CustomSnackbar from '@/components/UI/CustomSnackbar';

import '@/assets/styles/style.scss';
import '@/config/configAxios.ts';

const Root = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MuiThemeProvider>
          <CssBaseline />
          <CustomSnackbar />
          <Suspense fallback={null}>
            <Router basename='/'>
              <App />
            </Router>
          </Suspense>
        </MuiThemeProvider>
      </PersistGate>
    </Provider>
  );
};

// @ts-ignore
const root = createRoot(document.getElementById('root'));
root.render(<Root />);
