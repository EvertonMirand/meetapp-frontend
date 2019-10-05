import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import NewMeetUp from '~/pages/NewMeetUp';
import EditMeetUp from '~/pages/EditMeetUp';
import MeetUp from '~/pages/MeetUp';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/new" component={NewMeetUp} isPrivate />
      <Route path="/edit/:id" component={EditMeetUp} isPrivate />
      <Route path="/meetup/:id" component={MeetUp} isPrivate />
    </Switch>
  );
}
