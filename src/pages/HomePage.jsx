import React from 'react';
import { useSelector } from 'react-redux';
import LogoutButton from '../components/LogoutButton';

function HomePage() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <h1>Welcome, {user?.name || 'User'}</h1>
      <p>Email: {user?.email}</p>
      <LogoutButton />
    </div>
  );
}

export default HomePage;
