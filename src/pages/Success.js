import { NavLink } from 'react-router-dom';

export default function Success() {
  return (
    <>
      <h2 className='success__message'>Success!</h2>
      <NavLink className='success__button button' to='/login'>
        Back to Starting Page
      </NavLink>
    </>
  );
}
