import styled from 'styled-components';

export const Tag = styled.span`
  padding: 0 1rem 0 1.6rem;
  height: 3.2rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  background: rgba(33, 33, 33, 0.12);
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  line-height: 1.8rem;
  border-radius: 1.6rem;

  span,
  input {
    transition: width 0.2s;
    color: #1c1c1c;
  }

  input {
    background: none;
    border: 0;
    outline: 0;
    text-align: center;
  }

  button {
    background: none;
    border: 0;
    font-size: 0;

    svg {
      width: 1.6rem;
      height: 1.6rem;
      color: rgba(0, 0, 0, 0.6);

      transition: color 0.2s;
    }

    &:hover {
      svg {
        color: #b00020;
      }
    }
  }
`;

export const AddButton = styled.button`
  width: 2rem;
  height: 2rem;

  background: none;
  font-size: 0;
  border: 2px solid #1c1c1c;
  border-radius: 50%;

  svg {
    color: #1c1c1c;
    font-size: 1.2rem;
  }

  &:hover {
    border-color: #287199;
    svg {
      color: #287199;
    }
  }
`;

export const Container = styled.div`
  min-height: 3.2rem;
  width: 100%;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.8rem;

  ${Tag} + ${AddButton} {
    margin-left: 0.8rem;
  }

  span.error,
  > svg {
    font-size: 1.4rem;
    color: #b00020;
  }
`;
