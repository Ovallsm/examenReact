import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TokenProvider from './context/TokenProvider.jsx'

const router = createBrowserRouter([
  { path: "/", element: <CreateGame /> },

]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TokenProvider>
      <RouterProvider router={router} />
    </TokenProvider>
  </StrictMode>,
);

