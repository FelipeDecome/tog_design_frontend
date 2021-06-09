import styled from 'styled-components';

export const Container = styled.h1`
  font-size: 2.8rem;
  font-weight: 500;
  color: var(--cll-black-logo);
  transition: flex 0.6s ease, font-size 0.6s ease;

  span {
    font-size: 1.6em;
    font-weight: 800;
    letter-spacing: -0.47rem;
  }

  &,
  span {
    font-family: 'Catamaran', sans-serif;
  }
`;
