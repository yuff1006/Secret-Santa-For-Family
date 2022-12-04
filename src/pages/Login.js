import { NavLink } from 'react-router-dom';

export default function Login() {
  console.log('render');
  return (
    <div className='login'>
      <h1 className='login__header'>Welcome!</h1>
      <p className='login__paragraph'>I want to play ...</p>
      <NavLink to='/existing' className='login__button button'>
        an Existing Game
      </NavLink>
      <NavLink to='/new' className='login__button button'>
        a New Game
      </NavLink>
    </div>
  );
}
