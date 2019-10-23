import React from 'react';

import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Container } from './styles';
import ImageInput from '~/components/ImageInput';
import DatePicker from '~/components/DatePicker';
import IconLabelButton from '~/components/IconLabelButton';

const MEETUP_SCHEMA = Yup.object().shape({
  file_id: Yup.number('Dever-se colocar um banner.').required(
    'Dever-se colocar um banner.'
  ),
  title: Yup.string('Titulo invalido').required('Nescessario ter um titulo.'),
  description: Yup.string('Descricao invalida').required(
    'É nescessario ter uma descrição.'
  ),
  location: Yup.string('Localizacao invalida').required(
    'É nescessario colocar a descrição.'
  ),
  date: Yup.date('Data invalida').required('É nescessario ter uma data'),
});

export default function MeetupForm({ meetup, onSubmit }) {
  const loading = useSelector(state => state.meetup.loading);

  return (
    <Container>
      <Form schema={MEETUP_SCHEMA} initialData={meetup} onSubmit={onSubmit}>
        <ImageInput name="file_id" />
        <Input name="title" placeholder="Titulo do Meetup" />
        <Input
          name="description"
          placeholder="Descricao Completa"
          multiline
          rows="4"
        />
        <DatePicker name="date" placeholder="Data do Meetup" />
        <Input name="location" placeholder="Localizacao" />
        <IconLabelButton
          iconType="add"
          buttonType="submit"
          loading={loading}
          disabled={loading}
        >
          Salvar meetup
        </IconLabelButton>
      </Form>
    </Container>
  );
}

MeetupForm.propTypes = {
  meetup: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    dateFormatted: PropTypes.string,
    location: PropTypes.string,
    file_id: PropTypes.number,
    File: PropTypes.shape({
      url: PropTypes.string,
    }),
    date: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
};

MeetupForm.defaultProps = {
  meetup: {},
};
