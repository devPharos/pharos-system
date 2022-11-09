import React, { useRef } from "react";

import { Container, Leftbox, Rightbox, Form } from "./styles";

import { useDispatch } from "react-redux";
import { loginRequest } from "../../store/modules/auth/actions";

export default function Login() {
  const userRef = useRef();
  const passRef = useRef();
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    
    dispatch(loginRequest(userRef.current.value, passRef.current.value));
  }

  return (
    <Container>
      <Leftbox></Leftbox>
      <Rightbox>
        <Form onSubmit={handleSubmit}>
          <input type="text" placeholder="Usuário" ref={userRef} />
          <input type="password" placeholder="Senha" ref={passRef} />
          <button type="submit">Login</button>
          <p style={{ paddingTop: 12 }}>Esquecí minha senha.</p>
        </Form>
      </Rightbox>
    </Container>
  );
}
