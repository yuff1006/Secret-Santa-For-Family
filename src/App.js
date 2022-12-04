// import { db } from './firebase';
// import { collection, getDocs, addDoc } from 'firebase/firestore';
// import { useEffect, useState } from 'react';
import Login from './pages/Login';
import NewGame from './pages/NewGame';
import ExistingGame from './pages/ExistingGame';
import Layout from './pages/Layout';
import Results from './pages/Results';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Success from './pages/Success';
import { useEffect, useState } from 'react';
import { AppContext } from './context/AppContext';

function App() {
  const [secretKeyPairsContext, setSecretKeyPairsContext] = useState({});
  const [participantPairContext, setParticipantPairContext] = useState({});
  const [gameTokenContext, setGameTokenContext] = useState('');
  const navigate = useNavigate();

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(usersCollectionRef);
  //     setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };
  //   getUsers();
  // }, [usersCollectionRef]);

  // const createUser = async () => {
  //   await addDoc(usersCollectionRef, { name: 'newName', age: 'newAge' });
  // };

  // an object with key value pair: {name: 'John', person: 'Smith'}
  useEffect(() => {
    if (localStorage.getItem('success')) {
      navigate('/success');
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        secretKeyPairsContext,
        participantPairContext,
        gameTokenContext,
      }}
    >
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Login />} />
          <Route
            path='/new'
            element={
              <NewGame
                setSecretKeyPairsContext={setSecretKeyPairsContext}
                setGameTokenContext={setGameTokenContext}
              />
            }
          />
          <Route
            path='/existing'
            element={
              <ExistingGame
                setParticipantPairContext={setParticipantPairContext}
              />
            }
          />
          <Route path='/results' element={<Results />} />
          <Route path='/success' element={<Success />} />
        </Route>
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
