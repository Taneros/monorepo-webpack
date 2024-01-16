import { createBrowserRouter } from 'react-router-dom';

import { Suspense } from 'react';
import { Shop } from '@/pages/Shop';
import { App } from '@/components/App/App';

const routes = [
  {
    path: '/shop',
    element: <App />,
    children: [
      {
        path: '/shop/main',
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
