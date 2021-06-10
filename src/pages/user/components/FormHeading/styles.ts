import styled from 'styled-components';

export const Container = styled.h2`
  position: relative;

  font-size: 3.2rem;
  line-height: 3.7rem;
  align-self: flex-start;

  &,
  > span {
    font-family: 'Bai Jamjuree', sans-serif;
    font-weight: 600;
  }

  > span {
    position: absolute;
    left: -1px;
    top: 1px;
    z-index: -1;

    color: #f5f6f9;
    text-shadow: -1px 0 #191919, 0 1px #191919, 1px 0 #191919, 0 -1px #191919;
  }
`;
