import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  form {
    width: 40rem;

    display: flex;
    align-items: center;
    flex-direction: column;

    > a {
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
    }

    h2 + div {
      margin-top: 7.7rem;
    }

    > div + div,
    > a + button {
      margin-top: 5.6rem;
    }

    > div + a {
      margin-top: 1.6rem;
    }

    button {
      width: 23rem;
      height: 4rem;

      border-radius: 2rem;
    }
  }
`;
