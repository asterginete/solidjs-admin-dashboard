import { createSignal } from "solid-js";
import UserTable from "./components/UserTable";
import UserForm from "./components/UserForm";
import { User } from "./types";

function App() {
  const [users, setUsers] = createSignal<User[]>([]);

  return (
    <div>
      <UserForm onAddUser={(user: User) => setUsers([...users(), user])} />
      <UserTable users={users()} onDeleteUser={(id: number) => {
        const updatedUsers = users().filter(user => user.id !== id);
        setUsers(updatedUsers);
      }} />
    </div>
  );
}

export default App;
