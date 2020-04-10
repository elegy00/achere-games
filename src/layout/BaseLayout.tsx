import React from 'react';

import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactChild;
}

const BaseLayout: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <>
      <header>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/logout">Logout</Link>
        <Link to="/games">Games</Link>
      </header>
      <main>{children}</main>
    </>
  );
};

export default BaseLayout;
