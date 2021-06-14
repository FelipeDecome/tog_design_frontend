import { useField } from '@unform/core';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';

import { Container, ErrorMessage, StyledInput, StyledLabel } from './styles';

interface IInputProps {
  id?: string;
  name: string;
  type: string;
  label: string;
  labelBackground?: string;
  maskMoney?: boolean;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
}

const Input: React.FC<IInputProps> = memo(
  ({ id, name, type, label, labelBackground, maskMoney, onKeyUp }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const { registerField, fieldName, error } = useField(name);

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const handleInputFocus = useCallback(() => setIsFocused(true), []);
    const handleInputBlur = useCallback(() => {
      setIsFocused(false);

      setIsFilled(!!inputRef.current?.value);
    }, []);

    const handleInput = useCallback(() => {
      if (inputRef.current)
        inputRef.current.value = inputRef.current?.value.replace(
          /[^\d,\d]+/g,
          '',
        );
    }, []);

    useEffect(() => {
      registerField({
        name: fieldName,
        ref: inputRef.current,
        path: 'value',
      });
    }, [registerField, fieldName]);

    return (
      <Container isFocused={isFocused} isFilled={isFilled} hasError={!!error}>
        <StyledLabel backgroundColor={labelBackground} htmlFor={id || name}>
          {label}
        </StyledLabel>
        {maskMoney && (isFocused || isFilled) && (
          <span className="mask">R$</span>
        )}
        <StyledInput
          ref={inputRef}
          type={type}
          id={id || name}
          name={name}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onKeyUp={onKeyUp}
          onInput={handleInput}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Container>
    );
  },
);

export { Input };

/**
 * FIX input display when type set to number
 */
