import styled from 'styled-components';

import { WriteInput } from './components/WriteInput';

export const TextInput = styled(WriteInput)`
  font-size: 2rem;
  line-height: 2.4rem;
`;

export const TitleInput = styled(WriteInput)`
  font-size: 4rem;
  font-weight: 500;
  line-height: 4.9rem;
`;

export const Container = styled.div`
  padding-top: 13.5rem;
  padding-bottom: 5.6rem;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;

  background: #fff;

  form {
    width: 100%;
    max-width: 68rem;

    display: flex;
    flex-direction: column;

    gap: 2.4rem;

    .content {
      padding: 0 3.2rem 0 6.4rem;

      flex: 1;
      overflow-y: auto;

      div + div {
        margin-top: 2rem;
      }
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  gap: 2.4rem;

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.6rem;

    &.tags-container {
      padding: 0 2.4rem 0.8rem;

      border-left: 1px solid rgba(0, 0, 0, 0.25);
      border-right: 1px solid rgba(0, 0, 0, 0.25);
    }

    &.price-container {
      max-width: 15rem;

      > div {
        flex: 1;

        display: flex;
        align-items: center;
      }
    }

    h3 {
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.2rem;
      text-transform: uppercase;
    }
  }
`;
