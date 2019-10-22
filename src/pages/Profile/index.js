import React from 'react';

import { Form, Input } from '@rocketseat/unform';

import { useSelector, useDispatch } from 'react-redux';
import { Container } from './styles';
import IconLabelButton from '~/components/IconLabelButton';
import { updateProfileRequest } from '~/store/modules/user/actions';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu endereço de e-mail" />
        <hr />
        <Input
          type="password"
          name="oldPassword"
          placeholder="Sua senha atual"
        />
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmação de senha"
        />
        <IconLabelButton buttonType="submit">Salvar Perfil</IconLabelButton>
      </Form>
    </Container>
  );
}
