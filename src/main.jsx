import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom'
import { router } from './router/mainRouter'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </StrictMode>
)
