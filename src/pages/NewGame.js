import { useState } from 'react';
import { db } from '../firebase';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import randomWords from 'random-words';
import { useNavigate } from 'react-router-dom';

export default function NewGame({
  setSecretKeyPairsContext,
  setGameTokenContext,
}) {
  const navigate = useNavigate();
  const [nameInput, setNameInput] = useState('');
  const [gameToken, setGameToken] = useState('');
  const [nameDisplay, setNameDisplay] = useState([]);
  const [error, setError] = useState(false);
  const handleNameInputChange = (evt) => {
    setNameInput(evt.target.value);
  };
  const handleGameTokenChange = (evt) => {
    setGameToken(evt.target.value);
  };
  const handleNameSubmit = (evt) => {
    evt.preventDefault();
    setNameDisplay((prev) => [...prev, nameInput]);
    setNameInput('');
  };
  const handleAllDone = (evt) => {
    const secretKeyPairs = secretKeyForNames(nameDisplay);
    const namePairs = secretSantaMatching(nameDisplay);
    evt.preventDefault();
    addItem(gameToken.toLowerCase(), namePairs, secretKeyPairs)
      .then(() => console.log('success'))
      .then(() => {
        localStorage.setItem('success', JSON.stringify(secretKeyPairs));
        localStorage.setItem(
          'gameToken',
          JSON.stringify(gameToken.toLowerCase())
        );
        setSecretKeyPairsContext(secretKeyPairs);
        setGameTokenContext(gameToken.toLowerCase());
      })
      .then(() => {
        navigate('/success');
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };
  const addItem = async (gameToken, pairs, secretKeys) => {
    const docSnap = await getDoc(doc(db, 'data', gameToken.toLowerCase()));
    if (docSnap.exists()) {
      throw error;
    } else {
      return await setDoc(doc(db, 'data', gameToken.toLowerCase()), {
        pairs: pairs,
        secretKeys: secretKeys,
      });
    }
  };
  const secretKeyForNames = (nameList) => {
    const secretKeyNamePairs = {};
    for (let name of nameList) {
      secretKeyNamePairs[name] = randomWords();
    }
    return secretKeyNamePairs;
  };

  const secretSantaMatching = (nameList) => {
    const pairs = {};
    const nameList2 = [];
    for (let name of nameList) {
      nameList2.push(name);
    }
    for (let i = 0; i < nameList2.length; i++) {
      let randomizedIndex;
      do {
        randomizedIndex = Math.floor(Math.random() * nameList.length);
      } while (nameList2[i] === nameList[randomizedIndex]);

      pairs[nameList2[i]] = nameList[randomizedIndex];
      nameList.splice(randomizedIndex, 1);
    }
    return pairs;
  };

  return (
    <div className='new'>
      <form className='new__nameform'>
        <input
          type='text'
          className='new__input input-field'
          placeholder='Type one name at a time'
          value={nameInput}
          onChange={handleNameInputChange}
        />
        <button
          type='submit'
          className='new__namebutton button'
          onClick={handleNameSubmit}
        >
          Submit
        </button>
      </form>
      <div className='new__list'>
        {nameDisplay.map((name) => (
          <p key={name} className='new__list-item'>
            {name}
          </p>
        ))}
      </div>

      <div className='new__alldone-container'>
        <input
          type='text'
          className='new__input input-field new__input-gametoken'
          placeholder='Type in a Game Token'
          value={gameToken}
          onChange={handleGameTokenChange}
        />
        <button className='new__alldone button' onClick={handleAllDone}>
          All Done!
        </button>
        {error && <p className='new__error'>Something went wrong...</p>}
      </div>
    </div>
  );
}
