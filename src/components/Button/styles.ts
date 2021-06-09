import styled, { css } from 'styled-components';

export type TBackgroundColor = 'gray' | 'primary' | 'secondary';

interface IContainerProps {
  withIcon: boolean;
  backgroundColor: TBackgroundColor;
}

export const Container = styled.button<IContainerProps>`
  --hover-brightness: 0.9;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;
  color: var(--cll-white);
  ${props =>
    props.backgroundColor &&
    `background: var(--cll-${props.backgroundColor});`};

  transition: filter 0.2s;
  &:hover {
    filter: brightness(var(--hover-brightness));
  }

  ${props =>
    props.withIcon
      ? css`
          width: 4.8rem;
          height: 4.8rem;
          border-radius: 50%;

          & > svg {
            font-size: 2rem;
          }
        `
      : css`
          padding: 1.2rem 2.4rem;
          border-radius: 1.2rem;
          font-size: 1.2rem;
        `};

  ${props => props.backgroundColor !== 'gray' && `--hover-brightness: 1.1;`};
`;
