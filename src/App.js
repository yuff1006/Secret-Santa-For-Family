import './App.css';
import { app, db } from './firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

function App() {
  const usersCollectionRef = collection(db, 'vandellens2022');
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  });

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: 'newName', age: 'newAge' });
  };
  return (
    <div>
      <button onClick={createUser}>Create User</button>
      {users.map((user) => {
        return <div>{user.hello}</div>;
      })}
    </div>
  );
}

export default App;
