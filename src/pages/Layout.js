import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className='wrapper'>
      <div className='background'>
        <main className='main'>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
