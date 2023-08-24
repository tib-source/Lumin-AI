import { useRef } from "react";

// eslint-disable-next-line react/prop-types
export default function Clue({ toggleClue, clueText }) {
  const clue = useRef();
  return (
    <div
      onClick={() => toggleClue(clue)}
      data-clue={clueText}
      className="clue"
      ref={clue}
    >
      {clueText}
    </div>
  );
}
