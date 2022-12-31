import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import "./index.css";
// for test
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { createTheme , useTheme } from '@mui/material/styles';
import{ ThemeProvider} from '@mui/material';
import { faIR } from '@mui/material/locale';
import "./fonts/Vazir-Medium.eot";


const theme = createTheme(
  {
    direction: 'rtl',
    
  },
  faIR,
)

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

function RTL(props) {
  return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
  <CacheProvider value={cacheRtl}>
  <ThemeProvider theme={theme}>
  <App />
  </ThemeProvider>
  </CacheProvider>
    </BrowserRouter>
  </React.StrictMode>
);

