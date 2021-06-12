import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { useAuth } from '../../Contexts/auth';
import { useHeader } from '../../Contexts/header';
import { Button, Logo } from '..';
import { Container } from './styles';

const Header: React.FC = () => {
  const { headerColapse } = useHeader();

  const { user, signOut } = useAuth();

  return (
    <Container className={headerColapse ? 'colapse' : ''}>
      <Logo />

      <div>
        {!!user && (
          <Button type="button" backgroundColor="secondary">
            Write
          </Button>
        )}

        <Link to="/checkout">
          <Button type="button" icon={<FaShoppingBag />} />{' '}
        </Link>

        {user ? (
          <Button type="button" backgroundColor="primary" onClick={signOut}>
            Sign Out
          </Button>
        ) : (
          <Link to="/signin">
            <Button type="button" backgroundColor="primary">
              Sign In
            </Button>
          </Link>
        )}
      </div>
    </Container>
  );
};

export { Header };
