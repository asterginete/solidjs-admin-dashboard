import { onCleanup } from "solid-js";
import { User } from "../types";

interface UserTableProps {
  users: User[];
  onDeleteUser: (id: number) => void;
}

function UserTable(props: UserTableProps) {
  // Fetch users from API when component mounts
  onCleanup(() => {
    // Call your API to fetch users and update the users state
  });

  // TODO: Implement sorting, filtering, and pagination logic

  return (
    <table>
      <thead>
        {/* Table headers */}
      </thead>
      <tbody>
        {props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.age}</td>
            {/* ... other columns */}
            <td>
              <button onClick={() => props.onDeleteUser(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
