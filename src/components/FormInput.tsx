import React, { ChangeEvent } from "react";
import { Container } from "./FormInput.styles";

interface FormInputProps {
  id: number;
  label: string;
  placeholder: string;
  name: string;
  value: string;
  errorMessage?: string;
  pattern?: string;
  required?: boolean;

  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function FormInput(props: FormInputProps) {
  const { label, onChange, name, errorMessage, ...inputProps } = props;

  return (
    <Container>
      <label>{label}</label>
      <input onChange={onChange} {...inputProps} id={name} name={name} />
      <span>{errorMessage}</span>
    </Container>
  );
}

export { FormInput };
