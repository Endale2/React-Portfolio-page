import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUserData } from '../redux/authThunks';

const HomePage = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(loadUserData()); // Fetch and load user data when component mounts
    }
  }, [dispatch, isAuthenticated]);

  return (
    <div>
      <h1>Home Page</h1>
      {isAuthenticated ? <p>Welcome, {user?.name}</p> : <p>Please log in</p>}
    </div>
  );
};

export default HomePage;
