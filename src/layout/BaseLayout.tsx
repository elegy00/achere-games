import React from 'react';

import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import styled from 'styled-components';

interface Props {
  children: React.ReactChild;
}

const UserInfo = styled.div`
  margin-left: auto;
`;
const Header = styled.header`
  display: flex;
`;

const BaseLayout: React.FC<Props> = (props) => {
  const { children } = props;
  const { user } = useFirebase();
  return (
    <>
      <Header>
        <div>
          {!user && <Link to="/login">Login</Link>}
          {!user && <Link to="/register">Register</Link>}
          {user && <Link to="/games">Games</Link>}
        </div>
        {user && (
          <UserInfo>
            <Link to="logout">{user.email}</Link>
          </UserInfo>
        )}
      </Header>
      <main>{children}</main>
    </>
  );
};

export default BaseLayout;
