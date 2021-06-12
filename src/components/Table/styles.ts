import styled from 'styled-components';

export const Container = styled.table`
  width: 100%;
  max-width: 72rem;
  border-collapse: collapse;

  tr.separator {
    height: 2.4rem;
  }

  tr.with-separator {
    td {
      border-top: 1px solid rgba(112, 112, 112, 0.5);
    }
  }

  th,
  td {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.4rem;
    line-height: 2.1rem;
    text-align: start;
    color: #17181d;

    &:first-child {
      max-width: 20rem;
    }
  }

  th {
    text-transform: capitalize;
    font-weight: 500;
  }

  td {
    padding-top: 2.4rem;

    &:not(:last-child) {
      padding-right: 3.2rem;
    }

    vertical-align: top;

    &.bold {
      font-weight: 500;
      text-align: end;
      text-transform: capitalize;
    }

    button {
      margin-top: -0.4rem;
      padding: 0.8rem 0.8rem;

      background: 0;
      border: 0;
      border-radius: 50%;
      font-size: 0;

      transition: background 0.2s;

      svg {
        font-size: 1.6rem;
        color: #595959;

        transition: color 0.2s;
      }

      &:hover {
        background: rgba(112, 112, 112, 0.15);

        svg {
          color: #b00020;
        }
      }
    }
  }
`;
