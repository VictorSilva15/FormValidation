import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;

  background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.3)),
    url("https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  form {
    background-color: white;
    padding: 0 3%.75rem;
    border-radius: 0.625rem;
  }

  h1 {
    color: rgb(77, 1, 77);
    text-align: center;
  }

  button {
    width: 100%;
    height: 50px;
    padding: 0.625rem;
    border: none;
    background-color: rebeccapurple;
    color: white;
    border-radius: 0.312rem;
    font-size: 1.125rem;
    cursor: pointer;
    margin-bottom: 0.95rem;
  }
`;

export default AppContainer;
