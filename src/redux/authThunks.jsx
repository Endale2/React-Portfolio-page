// src/redux/authThunks.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUser } from '../services/userService';
import { loadUser } from './authSlice';

export const loadUserData = createAsyncThunk('auth/loadUserData', async (_, { dispatch }) => {
  try {
    const userData = await fetchUser();
    dispatch(loadUser(userData));
  } catch (error) {
    console.error('Failed to load user data:', error);
  }
});
