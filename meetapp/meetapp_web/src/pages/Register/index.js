import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { signUpRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome Obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é Obrigatório'),
  password: Yup.string()
    .min(8, 'A senha precisa ter no mínino 8 caracteres')
    .required('A senha é Obrigatória'),
});

export default function Register() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }
  return (
    <>
      <div>
        <img src={logo} alt="meeting" />
      </div>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="name" placeholder="Name" />
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Password" />

        <button style={{ background: '#339431' }} type="submit">
          REGISTER
        </button>
        <Link to="/">I ALREADY HAVE LOGIN</Link>
      </Form>
    </>
  );
}
