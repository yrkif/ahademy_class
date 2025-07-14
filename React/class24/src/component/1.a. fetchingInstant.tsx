import React, { useEffect, useState } from 'react';

// 1️⃣ Define a TypeScript interface for a user
interface User {
  id: number;
  name: string;
  email: string;
}

// 2️⃣ Define the functional component
const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]); // array of users
  const [loading, setLoading] = useState<boolean>(true); // loading state
  const [error, setError] = useState<string>(''); // error state

  // 3️⃣ Fetch data with useEffect
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }

        const data: User[] = await response.json(); // type the data
        setUsers(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // 4️⃣ Render the UI
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
