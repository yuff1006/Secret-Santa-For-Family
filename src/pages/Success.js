import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function Success() {
  const context = useContext(AppContext);
  const secretKeyNamePairs = context.secretKeyPairsContext;
  const gameToken = context.gameTokenContext;

  if (!secretKeyNamePairs || !gameToken) return null;
  return (
    <div className='success'>
      <h2 className='success__message'>Success!</h2>
      <p className='success__prompt'>Your Game Token is</p>
      <p>{gameToken}</p>
      <p className='success__prompt'>
        And your participants' sercret keys are below:
      </p>
      {Object.keys(secretKeyNamePairs).map((obj) => {
        return (
          <>
            <p>Name: {obj}</p>
            <p>Secret Key: {secretKeyNamePairs[obj]}</p>
          </>
        );
      })}
      <p className='success__prompt'>Take a screenshot for your convenience!</p>
      <NavLink className='success__button button' to='/'>
        Back to Starting Page
      </NavLink>
    </div>
  );
}
