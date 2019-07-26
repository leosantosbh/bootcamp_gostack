import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdExitToApp } from 'react-icons/md';
import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';

import Notifications from '../Notifications';

import { Container, Content, Profile, Badge } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <Link to="/dashboard">
          <img src={logo} alt="Meetapp" />
        </Link>
        <aside>
          <div>
            <Notifications />
          </div>
          <Profile>
            <img
              src={
                profile.avatar.url ||
                'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt="avatar"
            />
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Edit Profile</Link>
            </div>
          </Profile>
          <Badge onClick={handleSignOut}>
            <MdExitToApp color="red" size={40} />
          </Badge>
        </aside>
      </Content>
    </Container>
  );
}
