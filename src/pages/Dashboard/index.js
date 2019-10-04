import React from 'react';

import { Link } from 'react-router-dom';
import { MdChevronRight, MdChevronLeft } from 'react-icons/md';
import { Container, MeetUp, PageControl } from './styles';

import AddButton from '~/components/AddButton';
import Colors from '~/theme/Colors';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <h1>Meus meetups</h1>
        <Link to="new">
          <AddButton>Novo meetup</AddButton>
        </Link>
      </header>
      <ul>
        <Link to="meetup">
          <MeetUp>
            <strong>React Native</strong>
            <div>
              24 de junho às, 20h
              <MdChevronRight size={24} color={Colors.defaultText} />
            </div>
          </MeetUp>
        </Link>
      </ul>

      <PageControl>
        <button type="button" disabled>
          <MdChevronLeft size={25} />
        </button>
        <span>1</span>
        <button type="button">
          <MdChevronRight size={25} />
        </button>
      </PageControl>
    </Container>
  );
}
