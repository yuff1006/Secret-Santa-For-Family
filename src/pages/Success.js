import { NavLink } from 'react-router-dom';
import { useContext, useRef } from 'react';
import { AppContext } from '../context/AppContext';

export default function Success() {
  const context = useContext(AppContext);
  let secretKeyNamePairs = useRef(context.secretKeyPairsContext);
  let gameToken = useRef(context.gameTokenContext);

  if (localStorage.getItem('success')) {
    secretKeyNamePairs.current = JSON.parse(localStorage.getItem('success'));
  }
  if (localStorage.getItem('gameToken')) {
    gameToken.current = JSON.parse(localStorage.getItem('gameToken'));
  }

  console.log(secretKeyNamePairs.current);
  if (!secretKeyNamePairs) return null;
  return (
    <div className='success'>
      <h2 className='success__message'>Success!</h2>
      <p className='success__prompt'>Your Game Token is</p>
      <p className='success__token'>{gameToken.current}</p>
      <p className='success__prompt'>
        And your participants' sercret keys are below:
      </p>
      <div className='success__info-container'>
        {Object.keys(secretKeyNamePairs.current).map((obj) => {
          return (
            <div className='success__pairs' key={obj}>
              <p className='success__pair'>Name: {obj}</p>
              <p className='success__pair'>
                Secret Key: {secretKeyNamePairs.current[obj]}
              </p>
            </div>
          );
        })}
      </div>
      <p className='success__prompt'>
        Your participants will use their corresponding secret keys to access
        their Secret Santa person.
      </p>
      <p className='success__prompt'>Take a screenshot for your convenience!</p>
      <NavLink className='success__button button' to='/'>
        Back to Starting Page
      </NavLink>
    </div>
  );
}
