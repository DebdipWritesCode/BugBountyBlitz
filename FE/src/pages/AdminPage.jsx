import React, { useEffect, useState } from 'react';
import axios from '../services/axiosInstance';

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updating, setUpdating] = useState(false);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/bugs/getAllUsers');
      setUsers(response.data.users);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch users');
      setLoading(false);
    }
  };

  const updatePoints = async (userId, points) => {
    try {
      setUpdating(true);
      await axios.post('/bugs/changePoints', {
        userID: userId,
        points
      });
      setUpdating(false);
    } catch (error) {
      setError('Failed to update points');
      setUpdating(false);
    }
  };

  const handlePointsChange = (userId, newPoints) => {
    const updatedUsers = users.map((user) =>
      user._id === userId ? { ...user, points: newPoints } : user
    );
    setUsers(updatedUsers);
  };

  const handleSubmit = (userId, points) => {
    updatePoints(userId, points);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-6 font-roboto">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard - Users</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user._id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Team: {user.team_name}</h3>
            <div className="flex items-center">
              <p className="text-gray-700 mr-2">Points:</p>
              <input
                type="text"
                value={user.points}
                onChange={(e) => handlePointsChange(user._id, e.target.value)}
                className="border border-gray-300 rounded p-1 w-20"
              />
              <button
                onClick={() => handleSubmit(user._id, user.points)}
                className="ml-4 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                disabled={updating}
              >
                {updating ? 'Updating...' : 'Update'}
              </button>
              <a
                className="ml-4 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                href={`/admin/bugs/teams`}
                target="_blank"
              >
                View Bugs
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
