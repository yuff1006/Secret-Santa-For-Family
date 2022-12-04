import { useState, useEffect } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function ExistingGame({ setParticipantPairContext }) {
  useEffect(() => {
    if (localStorage.getItem('participant')) {
      navigate('/results');
    }
  }, []);
  const navigate = useNavigate();
  const [gameTokenInput, setGameTokenInput] = useState('');
  const [secretKeyInput, setSecretKeyInput] = useState('');
  const [error, setError] = useState(false);

  const handleGameTokenChange = (evt) => {
    setGameTokenInput(evt.target.value);
  };
  const handleSecretKeyChange = (evt) => {
    setSecretKeyInput(evt.target.value);
  };
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const listCollectionRef = doc(db, 'data', gameTokenInput);
    const docSnap = await getDoc(listCollectionRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      if (
        Object.values(data.secretKeys).includes(secretKeyInput.toLowerCase())
      ) {
        for (let key in data.secretKeys) {
          if (data.secretKeys[key] === secretKeyInput.toLowerCase()) {
            const pairObj = {};
            pairObj[key] = data.pairs[key];
            setParticipantPairContext(pairObj);
            localStorage.setItem('participant', JSON.stringify(pairObj));
            navigate('/results');
          }
        }
        setError(true);
      } else {
        setError(true);
      }
    }
    setError(true);
  };
  return (
    <div className='existinggame'>
      <form className='existinggame__form' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Game Token'
          className='existinggame__input input-field'
          onChange={handleGameTokenChange}
          value={gameTokenInput}
        />
        <input
          type='text'
          placeholder='Secret Key'
          className='existinggame__input input-field'
          onChange={handleSecretKeyChange}
          value={secretKeyInput}
        />
        <button type='submit' className='existinggame__button button'>
          Submit
        </button>
      </form>
      {error && (
        <p className='gametoken-error'>
          Oops, wrong game token and/or secret key.
        </p>
      )}
    </div>
  );
}
