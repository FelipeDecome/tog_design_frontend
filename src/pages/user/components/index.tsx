import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Button, Input } from '../../../components';

export const FormInput = styled(Input)``;

export const FormButton = styled(Button)`
  width: 23rem;
  height: 4rem;

  border-radius: 2rem;
`;

export const FormLink = styled(Link)`
  position: relative;
  align-self: flex-end;

  color: #17181d;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  line-height: 3.2rem;

  text-align: center;

  &::after {
    content: '';
    height: 1.5px;
    width: 10%;

    position: absolute;
    bottom: 2px;
    left: 10%;

    background: none;
    opacity: 0.4;
    transition: background 0.2s, width 0.4s ease;
  }

  &:hover {
    &::after {
      width: 80%;
      background: #17181d;
    }
  }
`;

export const Form = styled.form`
  max-width: 100vw;
  width: 40rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  h2 + ${FormInput} {
    margin-top: 7.7rem;
  }

  > ${FormInput} + ${FormInput}, > ${FormLink} + ${FormButton} {
    margin-top: 5.6rem;
  }

  > ${FormInput} + ${FormLink} {
    margin-top: 1.6rem;
  }
`;
