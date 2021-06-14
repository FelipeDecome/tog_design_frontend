import styled from 'styled-components';

interface IContainerProps {
  hasError: boolean;
}

export const Container = styled.div<IContainerProps>`
  width: 100%;
  position: relative;

  display: flex;
  align-items: center;

  textarea {
    width: 100%;

    border: 0;
    font-family: 'Roboto', sans-serif;
    resize: none;
    outline: 0;
    overflow: hidden;

    &::placeholder {
      color: ${props => (props.hasError ? '#b00020' : '#b3b3b1')};
      opacity: 0.6;
    }
  }

  svg {
    position: absolute;
    left: -4.8rem;
    font-size: 2.4rem;
    color: #b00020;
  }
`;
