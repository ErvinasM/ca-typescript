import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import HomePage from '../pages/home-page';
import ExplorePage from '../pages/explore-page';
import FeedPage from '../pages/feed-page';
import AboutPage from '../pages/about-page';
import AccountPage from '../pages/account-page';

import NavbarLayout from '../components/layouts/navbar-layout';
import routes from './routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarLayout />,
    children: [
      {
        path: routes.HomePage,
        element: <HomePage />,
      },
      {
        path: routes.ExplorePage,
        element: <ExplorePage />,
      },
      {
        path: routes.FeedPage,
        element: <FeedPage />,
      },
      {
        path: routes.AboutPage,
        element: <AboutPage />,
      },
      {
        path: routes.AccountPage,
        element: <AccountPage />,
      },
    ],
  },

]);

export default router;
