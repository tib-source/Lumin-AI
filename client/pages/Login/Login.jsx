import "./Login.css";
function Login() {
  return (
    <form className="Login">
      <label htmlFor="username">
        Username:
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          required
        />
      </label>
      <label htmlFor="password">
        Password:
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required
        />
      </label>

      <a href="#">Forgot Password</a>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
