import User from "./User";

export default function UserList({ users }) {
  return (
    <div>
      {users.map((user) => (
        <User
          key={user.login}
          avatar={user.avatar_url}
          url={user.html_url}
          username={user.login}
        />
      ))}
    </div>
  );
}
