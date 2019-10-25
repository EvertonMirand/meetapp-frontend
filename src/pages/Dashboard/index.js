import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { MdChevronRight, MdChevronLeft } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, MeetUp, PageControl, Spinner } from './styles';

import IconLabelButton from '~/components/IconLabelButton';
import Colors from '~/theme/Colors';
import api from '~/services/api';
import { ORGANIZING } from '~/constants/ApiCalls';
import { DEFAULT_DATE } from '~/constants/DateFormat';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchMeetups = async () => {
    const response = await api.get(ORGANIZING, {
      params: { page },
    });

    setLoading(false);

    const data = response.data.map(meetup => ({
      ...meetup,
      dateFormatted: format(parseISO(meetup.date), DEFAULT_DATE, {
        locale: pt,
      }),
    }));

    const countPages = Number(response.headers['x-total-page']) || 1;

    setTotalPages(countPages);

    setMeetups(data);
  };

  const loadMeetups = async () => {
    setLoading(true);
    try {
      await fetchMeetups();
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMeetups();
  }, [page]); // eslint-disable-line

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const renderHeader = () => (
    <header>
      <h1>Meus meetups</h1>
      <Link to="new">
        <IconLabelButton>Novo meetup</IconLabelButton>
      </Link>
    </header>
  );

  const renderMeetups = () => (
    <ul>
      {meetups.map(meetup => (
        <Link
          key={meetup.id}
          to={{
            pathname: `/meetup/${meetup.id}`,
            state: { meetup },
          }}
        >
          <MeetUp>
            <strong>{meetup.title}</strong>
            <div>
              {meetup.dateFormatted}
              <MdChevronRight size={24} color={Colors.defaultText} />
            </div>
          </MeetUp>
        </Link>
      ))}
    </ul>
  );

  const renderPageControl = () => (
    <PageControl>
      <button type="button" onClick={handlePrevPage} disabled={page === 1}>
        <MdChevronLeft size={25} />
      </button>
      <span>{page}</span>
      <button
        type="button"
        onClick={handleNextPage}
        disabled={totalPages === page}
      >
        <MdChevronRight size={25} />
      </button>
    </PageControl>
  );

  return (
    <Container>
      {renderHeader()}
      {loading ? (
        <Spinner />
      ) : (
        <>
          {renderMeetups()}
          {renderPageControl()}
        </>
      )}
    </Container>
  );
}
