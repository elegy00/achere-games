import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Logout: React.FC = () => {
  const { firebase, user } = useFirebase();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await firebase.doSignOut();
    console.log('signed out', result);
  };

  return (
    <>
      <h1>Confirm Logout</h1>
      <form onSubmit={onSubmit}>
        <button type="submit">Logout</button>
      </form>
    </>
  );
};

export default Logout;
