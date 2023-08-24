import { useRef } from "react";

// eslint-disable-next-line react/prop-types
export default function FlashCard({ info }) {
  const clickBox = useRef();
  function toggleCard() {
    clickBox.current.classList.toggle("flash-card-active");
  }
  return (
    <div className="flash-card">
      <div onClick={toggleCard} className="flash-card-inner" ref={clickBox}>
        <div className="flash-card-front"></div>
        <div className="flash-card-back">{info}</div>
      </div>
    </div>
  );
}
