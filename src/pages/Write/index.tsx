import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useCallback, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import { Button, Input } from '../../components';
import { useHeader } from '../../Contexts/header';
import { getValidationErrors } from '../../utils/getValidationErrors';
import { TagInput } from './components/TagInput';
import { Container, Footer, TextInput, TitleInput } from './styles';

interface IFormData {
  title: string;
  text: string;
  themes: string[];
  price: string;
}

const Write: React.FC = () => {
  const { setCustomButtons } = useHeader();
  const history = useHistory();

  const formRef = useRef<FormHandles>(null);

  const handleButtonClick = useCallback(() => {
    formRef.current?.submitForm();
  }, []);

  const handleSubmit = useCallback(async (data: IFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        title: Yup.string().required('Article title is required.'),
        text: Yup.string().required('Article text is required.'),
        themes: Yup.array()
          .of(Yup.string())
          .min(1, 'You must set at least one theme.'),
        price: Yup.string()
          .matches(/^\d+[,-.]+\d{2}/g)
          .required('Price is required.'),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (err) {
      if (err instanceof Yup.ValidationError)
        formRef.current?.setErrors(getValidationErrors(err));
    }
  }, []);

  useEffect(() => {
    setCustomButtons(
      <>
        <Button type="button" onClick={() => history.push('/')}>
          Cancel
        </Button>
        <Button
          type="button"
          backgroundColor="primary"
          onClick={handleButtonClick}
        >
          Publish
        </Button>
      </>,
    );

    return () => setCustomButtons(undefined);
  }, [history, setCustomButtons, handleButtonClick]);

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <div className="content">
          <TitleInput name="title" placeholder="Title" />

          <TextInput name="text" placeholder="Tell your story..." />
        </div>

        <Footer>
          <div className="tags-container">
            <h3>themes</h3>
            <TagInput name="themes" />
          </div>

          <div className="price-container">
            <h3>selling price</h3>

            <div>
              <Input
                type="text"
                name="price"
                label="price"
                labelBackground="#ffffff"
                maskMoney
              />
            </div>
          </div>
        </Footer>
      </Form>
    </Container>
  );
};

export { Write };
