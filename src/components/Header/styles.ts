import styled from 'styled-components';

export const Container = styled.header`
  --padding-top: 2.4rem;
  position: fixed;

  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--padding-top) 10.2rem;

  transition: padding-top 0.6s ease;

  div {
    display: flex;
    align-items: center;

    gap: 2.4rem;

    & > *:first-child {
      margin-right: 20px;
    }
  }

  &.colapse {
    --padding-top: 6.4rem;

    h1 {
      font-size: 3.6rem;
      flex: 1;
      text-align: center;
    }

    div {
      display: none;
    }
  }
`;
