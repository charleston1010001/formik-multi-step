import React from 'react'
import styled from 'styled-components'
import {InputField} from '../InputField'
import {Thumbnail} from "../Thumbnail"
import './steps.scss'

const FieldWrapper = styled.div`
  margin-bottom: 10px;
  > input {
    max-width: 300px;
    width: 100%;
  }
`;

const HeadWrapper = styled.h4`
  margin-bottom: 20px;
  font-weight: 700;
`;

const FileBtn = styled.a`
  cursor: pointer;
  color: #fff;
`;

export const Step1 = (props: any) => {
  const {errors, touched, values, handleChange, handleBlur, setFieldTouched} = props;
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
        setFieldTouched={setFieldTouched}
      />
      <InputField
        id='1.lastname'
        name='1.lastname'
        type='text'
        value={values['1'].lastname}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors['1']?.lastname && touched['1']?.lastname && errors['1'].lastname}
        setFieldTouched={setFieldTouched}
      />
    </fieldset>
  );
};

export const Step2 = (props: any) => {
  const {errors, touched, values, handleChange, handleBlur, setFieldTouched} = props;

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
        setFieldTouched={setFieldTouched}
      />
    </fieldset>
  );
};

export const Step3 = (props: any) => {
  const {errors, touched, values, setFieldValue} = props;

  const setFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue('3.file', e?.currentTarget?.files && e?.currentTarget?.files[0]);
  };

  const error = errors['3']?.file && touched['3']?.file;

  return (
    <fieldset>
      <HeadWrapper>Step 3</HeadWrapper>
      <FieldWrapper>
        <div className="form-group">
          <div className='mb-1'>File upload</div>
          <input
            className='file-upload'
            id='3.file'
            name='3.file'
            type='file'
            onChange={setFile}
          />
          <label htmlFor='3.file'><FileBtn className='btn btn-primary file-button'>Select file</FileBtn></label>
          {error && <div style={{color: 'red', fontSize: '12px'}}>{errors['3'].file}</div>}
          {values['3'].file && <Thumbnail file={values['3'].file}/>}
        </div>
      </FieldWrapper>
    </fieldset>
  );
};

export const Step4 = (props: any) => {
  const {values} = props;

  return (
    <fieldset>
      <HeadWrapper>Step 4</HeadWrapper>
      <pre className='mb-2'>
        {JSON.stringify({
          ...values,
          3: {
            file: {
              name: values['3'].file.name,
              type: values['3'].file.type,
              size: values['3'].file.size,
            }
          }
        }, null, 3)}
      </pre>
    </fieldset>
  );
};
