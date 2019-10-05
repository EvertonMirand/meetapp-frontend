import React, { useMemo } from 'react';

import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { parseISO } from 'date-fns';
import { Container } from './styles';
import ImageInput from '~/components/ImageInput';
import DatePicker from '~/components/DatePicker';
import IconLabelButton from '~/components/IconLabelButton';

const MEETUP_SCHEMA = Yup.object().shape({
  banner_id: Yup.number().required(),
  title: Yup.string().required(),
  description: Yup.string().required(),
  location: Yup.string().required(),
  date: Yup.date().required(),
});

export default function EditMeetUp({ location }) {
  const meetup = useMemo(
    () => ({
      ...location.state.meetup,
      date: parseISO(location.state.meetup.date),
    }),
    [location.state.meetup]
  );

  return (
    <Container>
      <Form schema={MEETUP_SCHEMA} initialData={meetup}>
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
        <IconLabelButton iconType="add" buttonType="submit">
          Salvar meetup
        </IconLabelButton>
      </Form>
    </Container>
  );
}

EditMeetUp.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
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
    }),
  }).isRequired,
};
