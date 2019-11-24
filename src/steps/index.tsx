import React from 'react';
import styled from 'styled-components';
import {InputField} from '../InputField';

const FieldWrapper = styled.div`
  > input {
    max-width: 300px;
    width: 100%;
  }
`;

const HeadWrapper = styled.h4`
  margin-bottom: 20px;
  font-weight: 700;
`;

export const Step1 = (props: any) => {
  const {errors, touched, values, handleChange, handleBlur} = props;
  return (
    <fieldset>
      <HeadWrapper>Step 1</HeadWrapper>
      <InputField
        id='1.firstname'
        name='1.firstname'
        type='text'
        value={values['1'].firstname}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors['1']?.firstname && touched['1']?.firstname && errors['1'].firstname}
      />
      <InputField
        id='1.lastname'
        name='1.lastname'
        type='text'
        value={values['1'].lastname}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors['1']?.lastname && touched['1']?.lastname && errors['1'].lastname}
      />
    </fieldset>
  );
};

export const Step2 = (props: any) => {
  const {errors, touched, values, handleChange, handleBlur} = props;

  return (
    <fieldset>
      <HeadWrapper>Step 2</HeadWrapper>
      <InputField
        id='2.email'
        name='2.email'
        type='email'
        value={values['2'].email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors['2']?.email && touched['2']?.email && errors['2'].email}
      />
    </fieldset>
  );
};

export const Step3 = (props: any) => (
  <fieldset>
    <HeadWrapper>Step 3</HeadWrapper>
    <FieldWrapper>
      Done
    </FieldWrapper>
  </fieldset>
);