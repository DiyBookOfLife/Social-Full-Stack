import { useState } from "react";

function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form>
        <label htmlFor="username">Username:</label>

        <input
          value={form.username}
          onChange={handleChange}
          id="username"
          name="username"
          type="text"
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          value={form.email}
          onChange={handleChange}
          id="email"
          name="email"
          type="email"
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          value={form.password}
          onChange={handleChange}
          id="password"
          name="password"
          type="password"
          required
        />

        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;
