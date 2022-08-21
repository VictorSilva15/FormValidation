import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;

  input {
    padding: 0.95rem;
    margin: 0.55rem 0;

    border-radius: 0.312rem;
    border: 1px solid gray;
  }

  label {
    font-size: 0.75rem;
    color: gray;
  }

  span {
    font-size: 0.75rem;
    padding: 3px;
    color: red;
    display: none;
  }

  input:invalid ~ span {
    display: block;
  }
`;

export { Container };
