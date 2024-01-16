import { Link, Outlet } from 'react-router-dom';

export const App = () => {
  if (__PLATFORM__ === 'desktop') {
    return (
      <>
        <div data-testId="App.TestIdDesktop"></div>
        <h1>ADMIN module</h1>
        <h2>PLATFORM=desktop</h2>
        <Link to='/admin/about'>Admin/About</Link>
        <Outlet />
      </>
    );
  }

  if (__PLATFORM__ === 'mobile') {
    return (
      <>
        <div data-testId="App.TestIdDesktop"></div>
        <h1>ADMIN module</h1>
        <h2>PLATFORM=mobile</h2>

        <Outlet />
      </>
    );
  }

  return null;
};
