import { createSignal } from "solid-js";
import { User } from "../types";

interface UserFormProps {
  onAddUser: (user: User) => void;
}

function UserForm(props: UserFormProps) {
  const [name, setName] = createSignal("");
  // ... other form fields

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    const newUser: User = {
      id: Date.now(), // Temporary ID, ideally this should come from the backend
      name: name(),
      // ... other fields
    };
    props.onAddUser(newUser);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name()} onInput={(e: any) => setName(e.target.value)} />
      {/* ... other form fields */}
      <button type="submit">Add User</button>
    </form>
  );
}

export default UserForm;
