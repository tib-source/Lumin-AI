import { useRef } from "react";

// eslint-disable-next-line react/prop-types
export default function FlashCard({ info, toggleCard }) {
  const clickBox = useRef();

  return (
    <div className="flash-card">
      <div
        onClick={() => {
          toggleCard(clickBox);
        }}
        className="flash-card-inner"
        ref={clickBox}
        data-flash={info}
      >
        <div className="flash-card-front"></div>
        <div className="flash-card-back">{info}</div>
      </div>
    </div>
  );
}
