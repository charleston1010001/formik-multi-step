import React from 'react';
import { ErrorMessage, Field } from 'formik'
import styled from 'styled-components';

const FieldWrapper = styled.div`
  margin-bottom: 15px;
  
  > input {
    max-width: 300px;
    width: 100%;
  }
`;

export const Step1 = (props: any) => {
  const {errors, touched} = props;
  return (
    <fieldset>
      Step 1
      <FieldWrapper>
        <Field name="1.firstname" type="text" placeholder="First Name" />
        {errors['1']?.firstname && touched['1']?.firstname && <div>{errors['1'].firstname}</div>}
        {/*<ErrorMessage name="1.firstname" component="div" />*/}
      </FieldWrapper>
      <FieldWrapper>
        <Field name="1.lastname" type="text" placeholder="Last Name" />
        {errors['1']?.lastname && touched['1']?.lastname && <div>{errors['1'].lastname}</div>}
        {/*<ErrorMessage name="1.lastname" component="div" />*/}
      </FieldWrapper>
    </fieldset>
  );
};

export const Step2 = (props: any) => (
  <fieldset>
    Step 2
    <FieldWrapper>
      <Field name="2.email" type="email" placeholder="Email" />
      <ErrorMessage name="2.email" component="div" />
    </FieldWrapper>
  </fieldset>
);

export const Step3 = (props: any) => (
  <fieldset>
    Step3
    <FieldWrapper>
      Done
    </FieldWrapper>
  </fieldset>
);