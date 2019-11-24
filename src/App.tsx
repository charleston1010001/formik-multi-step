import './App.scss';
import React, {useEffect, useState, useCallback, FormEvent, MouseEvent, ReactNode} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Step1, Step2, Step3  } from './steps';
import {TextValidation, EmailValidation } from './validation-schema';
import styled from 'styled-components';

const ButtonLayout = styled.div`
  max-width: 300px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; 
`;

const RightBtn = styled.button`
  grid-column-start: 3; 
`;

const AppWrapper = styled.div`
  padding: 30px;
`;

const validationSchema = Yup.object().shape({
  1: Yup.object().shape({
    firstname: TextValidation,
    lastname: TextValidation,
  }),
  2: Yup.object().shape({
    email: EmailValidation,
  })
});

const initialValues = {
  1: {
    firstname: '',
    lastname: '',
  },
  2: {
    email: '',
  }
};

const formSteps = 3;

export const App: React.FC<{}> = () => {
  const [step, setStep] = useState(1);

  const sendForm = async (values: any, { setSubmitting }: any) => {
    if (step === formSteps) {
      await new Promise((resolve) => {
        window.setTimeout(() => {
          setSubmitting(false);
          console.log(values);
          resolve()
        }, 1000)
      });
    }
  };

  const formik = useFormik({
    validateOnChange: true,
    validateOnBlur: true,
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: sendForm,
  });

  const {handleSubmit, errors, setTouched, touched, isValid, isSubmitting, isValidating, values} = formik;

  const nextStep = useCallback(() => setStep(step + 1), [step]);
  const prevStep = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStep(step - 1);
  }, [step]);

  const checkNextStep = (errors: any, touched: any) => {
    if (!errors[step] && touched[step] && step < formSteps) {
      nextStep();
      setTouched({});
    }
  };

  useEffect(() => {
    if (!isSubmitting && !isValidating && step < formSteps) {
      checkNextStep(errors, touched);
    }
  }, [isSubmitting, isValidating]);

  return (
    <AppWrapper>
      <form onSubmit={async (e: FormEvent<HTMLFormElement>) => {
        handleSubmit(e);
      }}>
        {({
          1: <Step1 {...formik} />,
          2: <Step2 {...formik} />,
          3: <Step3 {...formik} />
        } as {[value: number]: ReactNode})[step] || null}
        <ButtonLayout>
          {step > 1 && <button className='btn btn-secondary' onClick={prevStep}>Back</button>}
          {step < formSteps
            ? <RightBtn className='btn btn-primary' type="submit">Next</RightBtn>
            : <RightBtn className='btn btn-primary' disabled={!isValid || isSubmitting} type="submit">Send</RightBtn>
          }
        </ButtonLayout>
        <pre style={{marginTop: '40px'}}>{JSON.stringify({...values, valid: isValid}, null, 2)}</pre>
        <pre style={{marginTop: '40px'}}>{JSON.stringify(formik, null, 2)}</pre>
      </form>
    </AppWrapper>
  );
};
