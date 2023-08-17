import "./Login.css";

function Register() {
  return (
    <form className="Login">
      <label htmlFor="username">
        Username:
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username..."
          required
        />
      </label>

      <label htmlFor="password">
        Password:
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Password..."
          required
        />
      </label>

      <label htmlFor="confirmPassword">
        Conform Password:
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm Password..."
          required
        />
      </label>
      <a href="#">Have an account?</a>
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
