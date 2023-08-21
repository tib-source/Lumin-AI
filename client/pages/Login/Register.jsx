import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../src/redux/auth/authActions";
import { useEffect, useState } from "react";

function Register() {
  const { success } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (success) {
      navigate("/login");
    }
  }, [navigate, success]);
  const errorColor = "#FF9494";
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [emailError, setEmailError] = useState("");
  const [passerror, setPassError] = useState("");
  const [usererror, setUserError] = useState("");
  const handleChange = (e, callback) => {
    callback(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      dispatch(
        register({
          //email ,
          username,
          password,
        })
      );
    } else {
      setPassError("Passwords do not match");
    }
  };

  const errorSpan = (error) => {
    return (
      <span
        style={
          error
            ? {
                padding: 0,
                margin: 0,
                display: "block",
                color: `${errorColor}`,
                fontSize: "12px",
              }
            : {
                display: "none",
              }
        }
      >
        {error}
      </span>
    );
  };

  const outLineError = (error) => {
    const style = error
      ? { boxShadow: ` 0 0 1.5rem -0.7rem ${errorColor}` }
      : {};

    return style;
  };
  return (
    <form className="Login" onSubmit={handleFormSubmit}>
      <label htmlFor="username">
        Username:
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username..."
          onChange={(e) => handleChange(e, setUsername)}
          style={outLineError(usererror)}
          required
        />
        {errorSpan(usererror)}
      </label>

      {/* <label htmlFor="email">
        Email:
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email..."
          onChange={(e) => handleChange(e, setEmail)}
          style={outLineError(emailError)}
          required
        />
        {errorSpan(emailError)}
      </label> */}

      <label htmlFor="password">
        Password:
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password..."
          style={outLineError(passerror)}
          onChange={(e) => handleChange(e, setPassword)}
          required
        />
      </label>

      <label htmlFor="confirmPassword">
        Confirm Password:
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm Password..."
          style={outLineError(passerror)}
          onChange={(e) => handleChange(e, setConfirmPassword)}
          required
        />
        {errorSpan(passerror)}
      </label>

      <a href="#">Have an account?</a>
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
