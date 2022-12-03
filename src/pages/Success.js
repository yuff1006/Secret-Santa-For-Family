import { NavLink } from 'react-router-dom';

export default function Success() {
  return (
    <div className='success'>
      <h2 className='success__message'>Success!</h2>
      <p className='success__prompt'>Your Game Token is</p>
      <p>HelloWorld</p>
      <p className='success__prompt'>
        And your participants' sercret keys are below:
      </p>
      <p></p>
      <p className='success__prompt'>Take a screenshot for your convenience!</p>
      <NavLink className='success__button button' to='/'>
        Back to Starting Page
      </NavLink>
    </div>
  );
}
