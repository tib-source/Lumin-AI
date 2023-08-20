import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Login.css";
import { login } from "../../src/redux/auth/authActions";
import { useNavigate } from "react-router-dom";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, user, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e, callback) => {
    callback(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const userData = {
      username,
      password,
    };
    dispatch(login(userData));

    console.log("first");
  };

  useEffect(() => {
    if (user) {
      navigate("/learn");
    }
  }, [navigate, user]);

  return (
    <form onSubmit={handleFormSubmit} className="Login">
      <label htmlFor="username">
        Username:
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          required
          onChange={(e) => handleChange(e, setUsername)}
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
          onChange={(e) => handleChange(e, setPassword)}
        />
      </label>

      <a href="#">Forgot Password</a>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
