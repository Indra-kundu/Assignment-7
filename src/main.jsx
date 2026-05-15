import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router';
import { router } from './Routes/Routes';
import { TimelineProvider } from './Pages/Timeline/TimelineContext';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimelineProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>

    </TimelineProvider>
  </StrictMode>,
)
