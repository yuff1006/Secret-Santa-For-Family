import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className='wrapper'>
      <div className='background'>
        <main className='main'>
          <Outlet />
        </main>
        {/* <button onClick={createUser}>Create User</button>
        {users.map((user) => {
          return <div>{user.hello}</div>;
        })} */}
      </div>
    </div>
  );
}
