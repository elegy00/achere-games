import React from 'react';
import FirebaseContext from '../../config/firebaseContext';

const Login: React.FC = () => {
  return (
    <>
      <h1>Login</h1>;
      <FirebaseContext.Consumer>
        {(firebase) => {
          return <div>I've access to Firebase and render something.</div>;
        }}
      </FirebaseContext.Consumer>
    </>
  );
};

export default Login;
