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

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(form);

    try {
      const res = await userClient.post("/register", form);
      console.log(res.data);
    } catch (err) {
      console.log("FULL ERROR:", err);
      console.log("SERVER RESPONSE:", err.response?.data);
      alert(err.response?.data?.message);
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
