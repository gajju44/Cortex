import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EventPage from './Pages/EventPage';
import EventDetails from './Components/EventPage/EventDetails';
import HeroSection from './Components/Home/HeroSection';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HeroSection />,
      errorElement: <div>404 Page not found</div>, 
    },
    {
      path: '/events',
      element: <EventPage />,
    },
    {
      path: '/events-details',
      element: <EventDetails />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
