import React from 'react';

import { MdAddCircleOutline } from 'react-icons/md';
import { Container } from './styles';
import Button from '~/components/Button';
import Colors from '~/theme/Colors';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <h1>Meus meetups</h1>
        <Button>
          <MdAddCircleOutline size={24} color="#fff" />
          Novo meetup
        </Button>
      </header>
      {/* <ul>
        <Time key={time.time} past={time.past} available={!time.appointment}>
          <strong>{time.time}</strong>
          <span>
            {time.appointment ? time.appointment.user.name : 'Em aberto'}
          </span>
        </Time>
      </ul> */}
    </Container>
  );
}
