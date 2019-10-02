import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Content, Profile, Button } from './styles';

import logo from '~/assets/logo.svg';

export default function Header() {
  // const profile = useSelector(state => state.user.profile);
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="MeetApp" />
          </Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Everton Miranda</strong>
              <Link to="profile">Meu perfil</Link>
            </div>
          </Profile>
          <Button>Sair</Button>
        </aside>
      </Content>
    </Container>
  );
}
