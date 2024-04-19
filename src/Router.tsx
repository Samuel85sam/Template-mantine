import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import StopWatch from './pages/stop_watch-home';
import PileOuFace from './pages/pile-ou-face';
import Convertisseur from './pages/convertisseur';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/stop_watch',
    element: <StopWatch />,
  },
  {
    path: '/pile_ou_face',
    element: <PileOuFace />,
  },
  {
    path: '/convertisseur',
    element: <Convertisseur />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
