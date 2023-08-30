import { createSignal } from "solid-js";

function Login() {
  const [username, setUsername] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [error, setError] = createSignal("");

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/auth/login", {
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
        // Handle successful login, e.g., redirect to dashboard or update state
        window.location.href = "/"; // Redirect to the main dashboard
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
      <button onClick={handleLogin}>Login</button>
      {error() && <p>{error()}</p>}
    </div>
  );
}

export default Login;
