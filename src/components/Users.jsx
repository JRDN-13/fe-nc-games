import { useEffect, useState } from "react";
import { fetchUsers } from "../Api";

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUsers().then((usersData) => {
      setUsers(usersData);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }

  function handleClick() {}

  return (
    <main className="users-container">

      {users.map((users) => (

        <ul className="users-card">
          <p>{users.name}</p>
          <p className="user">{users.username}</p>
          <img
            className="users-card-img"
            src={users.avatar_url}
            alt={users.username}
          />
          <button onClick={handleClick}>Login</button>
        </ul>

      ))}
    </main>
  );
}

export default Users;