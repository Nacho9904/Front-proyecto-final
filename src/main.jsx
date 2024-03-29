import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import HomePage from './Pages/SobreNosotros.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {<App />}
  </React.StrictMode>
);
