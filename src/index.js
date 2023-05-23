import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import 'manrope';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
// import { ThemeProvider } from '@emotion/react';
// import { theme } from 'constants';
import { ThemeProviderContext } from 'shared/utils/ThemeContext/themeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ThemeProviderContext>
            <App />
          </ThemeProviderContext>
        </BrowserRouter>
      </PersistGate>
    </Provider>
    {/* </ThemeProvider> */}
  </React.StrictMode>
);
