import React from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { logoutSuccess } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

function LogoutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post('/api/auth/logout');
      dispatch(logoutSuccess());
      navigate('/login');
    } catch (error) {
      console.error('Logout error', error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default LogoutButton;
