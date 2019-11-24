import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

const FieldWrapper = styled.div`
  margin-bottom: 25px;
  position: relative;
  
  > input {
    max-width: 300px;
    width: 100%;
  }
`;

const Error = styled.div`
  color: red;
  font-size: 13px;
  position: absolute;
  top: 27px;
`;

interface IProps {
  id: string;
  name: string;
  type: string;
  value: string;
  error: string;
  onBlur: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputField: React.FC<IProps> = (props: IProps) => {
  const {id, name, type, value, onChange, onBlur, error} = props;

  return (
    <FieldWrapper>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <Error>{error}</Error>}
    </FieldWrapper>
  )
};
