import { createSignal } from "solid-js";

function Register() {
  const [username, setUsername] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [confirmPassword, setConfirmPassword] = createSignal("");
  const [error, setError] = createSignal("");

  const handleRegister = async () => {
    if (password() !== confirmPassword()) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username(),
          password: password()
        })
      });

      const data = await response.json();

      if (data.success) {
        // Handle successful registration, e.g., redirect to login page or update state
        window.location.href = "/login"; // Redirect to the login page
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <input type="text" placeholder="Username" value={username()} onInput={(e) => setUsername(e.currentTarget.value)} />
      <input type="password" placeholder="Password" value={password()} onInput={(e) => setPassword(e.currentTarget.value)} />
      <input type="password" placeholder="Confirm Password" value={confirmPassword()} onInput={(e) => setConfirmPassword(e.currentTarget.value)} />
      <button onClick={handleRegister}>Register</button>
      {error() && <p>{error()}</p>}
    </div>
  );
}

export default Register;
