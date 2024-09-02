import React from 'react';
import { useSelector } from 'react-redux';

function AdminPage() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {user?.role === 'admin' ? (
        <p>Welcome, Admin {user?.name}!</p>
      ) : (
        <p>You do not have permission to view this page.</p>
      )}
    </div>
  );
}

export default AdminPage;
