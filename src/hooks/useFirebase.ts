import { useContext, useState } from 'react';
import FirebaseContext from '../config/firebaseContext';

const useFirebase = () => {
  const firebase = useContext(FirebaseContext);
  const [user, setUser] = useState<firebase.User | null>(null);

  if (!firebase) {
    throw new Error('Context not initialized');
  }

  firebase.auth.onAuthStateChanged((user) => {
    setUser(user);
  });

  return { firebase, user };
};

export default useFirebase;
