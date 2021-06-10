import { FormHandles } from '@unform/core';
import { Form as UnForm } from '@unform/web';
import React, { useCallback, useEffect, useRef } from 'react';
import * as Yup from 'yup';

import { useAuth } from '../../../Contexts/auth';
import { useHeader } from '../../../Contexts/header';
import { getValidationErrors } from '../../../utils/getValidationErrors';
import { Form, FormButton, FormInput, FormLink } from '../components';
import { FormHeading } from '../components/FormHeading';
import { Container } from './styles';

interface ISignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { toggleHeaderColapse } = useHeader();
  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: ISignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Enter a valid email address')
            .required('Email address required'),
          password: Yup.string().required('Password required'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn(data);
      } catch (err) {
        if (err instanceof Yup.ValidationError)
          formRef.current?.setErrors(getValidationErrors(err));
      }
    },
    [signIn],
  );

  useEffect(() => {
    toggleHeaderColapse();

    return () => toggleHeaderColapse();
  }, [toggleHeaderColapse]);

  return (
    <Container>
      <Form ref={formRef} as={UnForm} onSubmit={handleSubmit}>
        <FormHeading>Sign in</FormHeading>

        <FormInput type="text" name="email" label="E-mail" />
        <FormInput type="password" name="password" label="Password" />
        <FormLink to="/">Forgot your password?</FormLink>

        <FormButton backgroundColor="primary">Sign in</FormButton>
      </Form>
    </Container>
  );
};

export { SignIn };
