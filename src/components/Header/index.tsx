import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { useHeader } from '../../Contexts/header';
import { Button, Logo } from '..';
import { Container } from './styles';

const Header: React.FC = () => {
  const { headerColapse, toggleHeaderColapse } = useHeader();

  return (
    <Container className={headerColapse ? 'colapse' : ''}>
      <Logo />

      <div>
        <Button
          type="button"
          backgroundColor="secondary"
          onClick={toggleHeaderColapse}
        >
          Write
        </Button>
        <Button type="button" icon={<FaShoppingBag />} />
        <Link to="/signin">
          <Button type="button" backgroundColor="primary">
            Sign In
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export { Header };
