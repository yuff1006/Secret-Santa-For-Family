import { useContext, useRef } from 'react';
import { AppContext } from '../context/AppContext';
import santa from '../santa.png';

export default function Results() {
  const context = useContext(AppContext);
  let gifter = useRef(Object.keys(context.participantPairContext)[0]);
  let giftee = useRef(Object.values(context.participantPairContext)[0]);

  if (localStorage.getItem('participant')) {
    gifter.current = Object.keys(
      JSON.parse(localStorage.getItem('participant'))
    );
    giftee.current = Object.values(
      JSON.parse(localStorage.getItem('participant'))
    );
  }

  return (
    <div className='results'>
      <p className='results__gifter'>
        {gifter.current.toString().charAt(0).toUpperCase() +
          gifter.current.toString().slice(1)}
        ,
      </p>
      <p className='results__prompt'>your Secret Santa giftee is: </p>
      <p className='results__giftee'>
        {giftee.current.toString().charAt(0).toUpperCase() +
          giftee.current.toString().slice(1)}
      </p>
      <img src={santa} alt='santa' className='results__santa' />
    </div>
  );
}
