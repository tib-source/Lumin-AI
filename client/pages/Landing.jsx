import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landing">
      <div className="landing-main">
        <h1>Lumin</h1>
        <p>Illuminating minds with the knowledge of AI</p>
        <Link to="/learn">Start your Journey</Link>
      </div>
    </div>
  );
}
