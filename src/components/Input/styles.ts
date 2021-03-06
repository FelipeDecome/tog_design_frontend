import styled, { css, keyframes } from 'styled-components';

interface IContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  hasError: boolean;
}

const ShakeAnimation = keyframes`
  0% {
    transform: translateX(20px);
  }

  50% {
    transform: translateX(-20px);
  }

  100% {
    transform: translateX(0);
  }
`;

interface IStyledLabel {
  backgroundColor?: string;
}

const textDefaults = css`
  font-size: 1.4rem;
  letter-spacing: 0.47px;
`;

export const StyledLabel = styled.label<IStyledLabel>`
  ${textDefaults};

  padding: 0 0.4rem;
  position: absolute;
  left: 1.2rem;

  color: #aeaeae;
  background: ${props =>
    props.backgroundColor ? props.backgroundColor : '#f5f6f9'};

  text-transform: capitalize;

  transition: transform 0.2s, color 0.2s, font-size 0.2s;
  pointer-events: none;
`;

export const StyledInput = styled.input`
  ${textDefaults};
  width: 100%;
  height: 100%;

  color: #3d3d3d;

  border: 0;
  background: none;
  outline: 0;
`;

export const ErrorMessage = styled.span`
  position: absolute;
  left: 1.6rem;
  bottom: -1.6rem;

  color: #b00020;
  font-size: 1rem;
  text-transform: uppercase;
  white-space: nowrap;

  animation-name: ${ShakeAnimation};
  animation-duration: 0.4s;
`;

export const Container = styled.div<IContainerProps>`
  padding-left: 1.6rem;
  width: 100%;
  height: 4rem;

  position: relative;
  display: flex;
  align-items: center;

  border-radius: 0.4rem;
  border: 1px solid rgba(0, 0, 0, 0.26);

  transition: border-color 0.2s;
  cursor: text;

  > span.mask {
    ${textDefaults};
    color: #3d3d3d;
  }

  span.mask + ${StyledInput} {
    margin-left: 0.4rem;
  }

  ${props =>
    !props.isFocused &&
    !props.hasError &&
    css`
      &:hover {
        border-color: rgba(0, 0, 0, 0.56);
      }
    `}

  ${props =>
    (props.isFocused || props.isFilled) &&
    css`
      & > ${StyledLabel} {
        color: #3d3d3d;
        transform: translateY(-20px);
        font-size: 1.2rem;
        letter-spacing: 0.4px;
      }
    `}

  ${props =>
    props.isFocused &&
    css`
      border: 2px solid #287199;

      & > ${StyledLabel} {
        color: #3598cc;
      }
    `}

    ${props =>
    props.hasError &&
    css`
      border-color: #992828;

      & > ${StyledLabel}, & > ${StyledInput} {
        color: #b00020;
      }
    `}
`;
