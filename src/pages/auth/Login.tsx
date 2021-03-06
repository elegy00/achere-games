import React, { useState } from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login: React.FC = () => {
  const { firebase } = useFirebase();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await firebase.doSignInWithEmailAndPassword(email, password);
    console.log('logged in', result);
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="passwordOne"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button type="submit">login</button>
      </form>
    </>
  );
};

export default Login;
