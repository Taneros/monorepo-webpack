import { Outlet } from 'react-router-dom';

export const App = () => {
  if (__PLATFORM__ === 'desktop') {
    return (
      <>
        <div data-testId="App.TestIdDesktop"></div>
        <h1>SHOP Module</h1>
        <h1>PLATFORM=desktop</h1>

        <Outlet />
      </>
    );
  }

  if (__PLATFORM__ === 'mobile') {
    return (
      <>
        <div data-testId="App.TestIdDesktop"></div>
        <h1>SHOP Module</h1>
        <h2>PLATFORM=mobile</h2>

        <Outlet />
      </>
    );
  }

  return null;
};
