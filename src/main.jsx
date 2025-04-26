import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {MantineProvider} from '@mantine/core'
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

import './index.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <MantineProvider theme={{ colors: { teal: ['#0D9488'] } }}>
    <App />
    </MantineProvider>
    </BrowserRouter>
  </StrictMode>,
)
