import { useState } from "react";

import { userClient } from "../clients/api.JS";

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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    try {
      // send the form data to our backend
      userClient.post("/register", form);
    } catch (err) {
      console.log(err);
      alert(err.message);
    }

    // take the token and store it locally

    // save some user data in our state

    // take the user to a different page
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit}>
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
