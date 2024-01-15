import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Suspense } from 'react';
import { Shop } from '@/pages/Shop';
import { App } from '@/components/App/App';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/shop',
        element: (
          <Suspense>
            <Shop />
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
