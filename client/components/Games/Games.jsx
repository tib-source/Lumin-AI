import { Link } from "react-router-dom";
import "./index.css";
export default function Games() {
  return (
    <div className="games__container">
      <h1>Games</h1>
      <div className="games__list">
        <Link to={"/games/crossword"} className="game">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/British_crossword.svg/640px-British_crossword.svg.png"
            alt="crossword image"
          />
          <p>Crossword</p>
        </Link>
        <Link to={"/games/flashbang"} className="game">
          <img
            src="https://www.novakidschool.com/blog/wp-content/uploads/2022/06/Untitled-1.png"
            alt="flash card image"
          />
          <p>FlashBang</p>
        </Link>
      </div>
    </div>
  );
}
