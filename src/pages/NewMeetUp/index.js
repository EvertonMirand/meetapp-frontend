import React from 'react';

import { Form } from '@rocketseat/unform';

import { Container } from './styles';
import ImageInput from '~/components/ImageInput';

export default function NewMeetUp() {
  return (
    <Container>
      <Form>
        <ImageInput />
      </Form>
    </Container>
  );
}
