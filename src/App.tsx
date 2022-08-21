// Tools
import React, { useState, FormEvent, ChangeEvent } from "react";

// Components
import { FormInput } from "./components/FormInput";

// Styles
import AppContainer from "./App.styles";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: ""
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "E-mail",
      label: "E-mail",
      errorMessage: "It should be a valid email address!",
      required: true
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday"
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
      required: true,
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      errorMessage: "Passwords don't match",
      required: true
    }
  ];

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // diferent way to get Data

    // const target: EventTarget = event.target;
    // const data = new FormData(target as HTMLFormElement);
    // const dataConverted = Object.fromEntries(data.entries());
    // console.log(dataConverted);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <AppContainer>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => {
          return (
            <FormInput
              key={input.id}
              value={values[input.name]}
              onChange={handleInputChange}
              {...input}
            />
          );
        })}

        <button type="submit"> Submit </button>
      </form>
    </AppContainer>
  );
}

export { App };
