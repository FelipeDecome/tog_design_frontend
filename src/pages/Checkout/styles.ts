import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  main,
  aside {
    --padding-top: 17.2rem;
    height: 100%;

    h3 {
      color: #17181d;

      font-family: 'Montserrat', sans-serif;
      font-size: 2.4rem;
      font-weight: 400;
      line-height: 3.2rem;
    }
  }

  main {
    padding-top: var(--padding-top);
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;

    table {
      margin-top: 4.8rem;
    }
  }

  aside {
    padding: var(--padding-top) 6.4rem 0;
    width: 39.4rem;
    background: #ecedf3;

    .content {
      margin-top: 6.4rem;

      ul {
        margin-top: 3.2rem;

        display: flex;
        flex-direction: column;
        gap: 1.6rem;

        li {
          display: flex;
          justify-content: space-between;

          p,
          span {
            font-family: 'Montserrat', sans-serif;
            font-size: 1.4rem;
            line-height: 2.1rem;
          }

          p {
            text-transform: capitalize;
            font-weight: 500;
          }
        }

        hr {
          all: unset;
          height: 1px;

          margin: 0.8rem 0;

          background: #707070;
          opacity: 0.3;
        }
      }
    }

    .buttons {
      margin-top: 6.4rem;
      display: flex;
      flex-direction: column;
      gap: 3.2rem;

      button {
        height: 4.5rem;
        border: 2px solid #292c35;
        border-radius: 22.75rem;
        font-family: 'Montserrat', sans-serif;
        font-size: 1.4rem;

        &:first-child {
          background: #292c35;
          color: #fec92e;

          transition: filter 0.2s;

          &:hover {
            filter: brightness(1.2);
            color: #ecedf3;
          }
        }

        &:last-child {
          transition: background 0.2s;

          &:hover {
            background: #aeaeae;
          }
        }
      }
    }
  }
`;
