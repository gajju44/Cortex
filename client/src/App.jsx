import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EventPage from './Pages/EventPage';
import EventDetails from './Components/EventPage/EventDetails';
import Home from './Pages/Home'
import DevelopersPage from './Components/DevelopersPage/DevelopersPage';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <div>404 Page not found</div>, 
    },
    {
      path: '/events',
      element: <EventPage />,
    },
    {
      path: '/DevelopersPage',
      element: <DevelopersPage />,
    },
    {
      path: '/events-details',
      element: <EventDetails />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
