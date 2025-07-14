import React, { useEffect, useState } from 'react';
import type { User } from '../type/user';

const FetchUserData = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const response = await new Promise<Response>((resolve) => {
        setTimeout(() => {
          resolve(fetch('https://jsonplaceholder.typicode.com/users'));
        }, 1000);
      });

      const data = await response.json();
      setUsers(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>List of Users</h1>
      {loading ? (
        <p>loading...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchUserData;
