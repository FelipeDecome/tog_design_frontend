import { useField } from '@unform/core';
import React, { useEffect, useRef } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import TextareaAutosize, {
  TextareaAutosizeProps,
} from 'react-textarea-autosize';

import { Container } from './styles';

interface IWriteInputProps extends TextareaAutosizeProps {
  name: string;
  placeholder: string;
}

const WriteInput: React.FC<IWriteInputProps> = ({
  name,
  placeholder,
  ...rest
}) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { registerField, fieldName, error, clearError } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  return (
    <Container hasError={!!error}>
      <TextareaAutosize
        ref={inputRef}
        name={name}
        onInput={() => clearError()}
        placeholder={error || placeholder}
        {...rest}
      />
      {error && (
        <>
          <FaExclamationTriangle aria-label="Erro" />
        </>
      )}
    </Container>
  );
};

export { WriteInput };
