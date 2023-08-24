import FlashCard from "./FlashCard";
import "./index.css";
export default function FlashBang() {
  const flash = {
    id: 1,
    flashText: "Computer",
    flashClue: "It is a widely used device",
  };
  const flashBang = [
    [flash, flash, flash],
    [flash, flash, flash],
    [flash, flash, flash],
  ];

  return (
    <div className="flashbang__container">
      <h1>FlashBang</h1>
      <div className="flashbang__main">
        <div className="flashText">
          {flashBang.map((flashRow, index) => {
            return (
              <div className="flashrow" key={index}>
                {flashRow.map((flashCol, i) => {
                  return (
                    <FlashCard
                      info={flashCol.flashText}
                      key={i}
                      id={`#${index}-${i}`}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="flashClue">
          <div className="clues">
            {flashBang.map((row) =>
              row.map((col, index) => {
                return (
                  <div className="clue" key={index}>
                    {col.flashClue}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
