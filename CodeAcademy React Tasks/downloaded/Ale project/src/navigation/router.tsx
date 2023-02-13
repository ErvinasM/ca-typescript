import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import BeerListPage from 'pages/beer-list-page';
import SingleBeerPage from 'pages/single-beer-page/index';
import NotFoundPage from 'pages/not-found-page/index';
import DrawerLayout from 'components/layouts/drawer-layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DrawerLayout />,
    children: [
      {
        index: true,
        element: <BeerListPage />,
      },
      {
        path: '/beer/:beerId',
        element: <SingleBeerPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
