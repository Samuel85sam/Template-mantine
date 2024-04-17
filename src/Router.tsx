import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import StopWatch from './pages/stop_watch-home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/stop_watch',
    element: <StopWatch />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
