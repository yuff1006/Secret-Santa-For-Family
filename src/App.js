import './App.css';
import { app, db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';
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
  return (
    <div>
      {users.map((user) => {
        return <div>{user.hello}</div>;
      })}
    </div>
  );
}

export default App;
