import { createBrowserRouter } from 'react-router-dom';

import { Suspense } from 'react';
import { About } from '@/pages/About';
import { App } from '@/components/App/App';

const routes = [
  {
    path: '/admin',
    element: <App />,
    children: [
      {
        path: '/admin/about',
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
