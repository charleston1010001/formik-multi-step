import './App.scss';
import React, { useState, useCallback } from 'react';
import { Formik } from 'formik';
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
  const nextStep = useCallback(() => {setStep(step + 1)}, [step]);
  const prevStep = useCallback(() => setStep(step - 1), [step]);

  const determineNextStep = (errors: any) => {
    if (!errors[step]) {
      nextStep();
    }
  };

  const resetTouched = (setTouched: any, touched: any, errors: any) => {

  };

  const sendForm = async (values: any, { setSubmitting }: any) => {
    if (step === formSteps) {
      await new Promise((resolve) => {
        window.setTimeout(() => {
          setSubmitting(false);
          console.log(values);
          resolve()
        }, 2000)
      })
    }
  };

  return (
    <AppWrapper>
      <Formik
        validateOnMount={true}
        validateOnChange={true}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={sendForm}
      >
        {(props: any) => {
          return (
            <>
              <form onSubmit={(e) => {
                props.handleSubmit(e);
                console.log(props);
                determineNextStep(props.errors);
                resetTouched(props.setTouched, props.touched, props.errors);
              }}>
                {({
                  1: <Step1 {...props} />,
                  2: <Step2 {...props} />,
                  3: <Step3 {...props} />
                } as any)[step] || null}
                <ButtonLayout>
                  {step > 1 && <button onClick={prevStep} type="submit">Back</button>}
                  {step < formSteps ?
                    <RightBtn type="submit">Next</RightBtn>
                    :
                    <RightBtn disabled={!props.isValid || props.isSubmitting} type="submit">Send</RightBtn>
                  }
                </ButtonLayout>
                <pre style={{marginTop: '40px'}}>{JSON.stringify({...props.values, valid: props.isValid}, null, 2)}</pre>
                <pre style={{marginTop: '40px'}}>{JSON.stringify(props, null, 2)}</pre>
              </form>
            </>
          )
        }}
      </Formik>
    </AppWrapper>
  )
};
