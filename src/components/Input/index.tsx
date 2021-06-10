import { useField } from '@unform/core';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';

import { Container, ErrorMessage, StyledInput, StyledLabel } from './styles';

interface IInputProps {
  id?: string;
  type: string;
  name: string;
  label: string;
}

const Input: React.FC<IInputProps> = memo(({ id, name, type, label }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { registerField, fieldName, error } = useField(name);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => setIsFocused(true), []);
  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(
    () =>
      registerField({
        name: fieldName,
        ref: inputRef.current,
        path: 'value',
      }),
    [fieldName, registerField],
  );

  return (
    <Container isFocused={isFocused} isFilled={isFilled} hasError={!!error}>
      <StyledLabel htmlFor={id || name}>{label}</StyledLabel>
      <StyledInput
        ref={inputRef}
        type={type}
        id={id || name}
        name={name}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
});

export { Input };
