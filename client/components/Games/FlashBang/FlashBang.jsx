import { useState } from "react";
import FlashCard from "./FlashCard";
import data from "./testData.json";
import "./index.css";
import Clue from "./Clue";
import { useRef } from "react";
import { Link } from "react-router-dom";
export default function FlashBang() {
  const flashBang = data;

  // keep track of clues that are clicked
  const [cluesActive, setCluesActive] = useState([]);
  // keep track of the card which has been flipped
  const [flippedCards, setFlippedCards] = useState([]);

  const currentFlash = useRef(null);
  const currentClue = useRef(null);
  const [hearts, setHearts] = useState(3);
  const [gameOver, setGameOver] = useState(false);
  // function to flip clicked card and play error animation when trying to flip multiple
  function toggleElement(
    elementRef,
    elementList,
    setElementList,
    currentRef,
    active,
    error
  ) {
    // get element from reference object
    const element = elementRef.current;

    // if there is nothing currently selected by the user
    if (!currentRef.current) {
      // add active class to element
      element.classList.toggle(active);
      // add element to activated List
      setElementList([...elementList, element]);
      // set element as currently selected
      currentRef.current = element;
      // check if there has been a match
      checkMatch();
    } else {
      //error animation on multiple flip attempt
      if (!elementList.includes(element)) {
        element.classList.toggle(error);
        // remove the error animation after 100 seconds
        setTimeout(() => {
          element.classList.toggle(error);
        }, 100);
      }
    }
  }

  function showError(element, error) {
    element.classList.toggle(error);
    // remove the error animation after 100 seconds
    setTimeout(() => {
      element.classList.toggle(error);
    }, 100);
  }

  function removeFromState(element, elementList, setElement) {
    try {
      setElement(elementList.filter((item) => item !== element));
      console.log(elementList);
    } catch (error) {
      console.log(error);
    }
  }

  function resetCurrent(error = true) {
    const flash = currentFlash.current;
    const clue = currentClue.current;
    flash.classList.remove("flash-card-active");
    clue.classList.remove("clue-active");
    if (error) {
      showError(flash, "flash-card-error");
      showError(clue, "clue-error");
      removeFromState(flash, flippedCards, setFlippedCards);
      removeFromState(clue, cluesActive, setCluesActive);
      setHearts(hearts - 1);
      console.log(hearts);
      if (hearts == 1) {
        setGameOver(true);
      }
    }
    currentClue.current = null;
    currentFlash.current = null;
  }

  function reset() {
    // go through elements and remove all active && success message
    // make all elements clickable
    for (let element of flippedCards) {
      element.classList.remove("flash-card-success");
      element.children[1].classList.remove("flash-card-success");
      element.classList.remove("flash-card-active");
      // make element clickable
      clickable(element);
    }
    for (let element of cluesActive) {
      // remove success if it exists
      element.classList.remove("clue-success");
      element.classList.remove("clue-active");
      // make clickable
      clickable(element);
    }

    // reset state
    currentClue.current = null;
    currentClue.flash = null;
    setFlippedCards([]);
    setCluesActive([]);
    setGameOver(false);
    setHearts(3);
  }
  function unclickable(element) {
    element.style.pointerEvents = "none";
  }

  function clickable(element) {
    element.style.pointerEvents = "auto";
  }
  function checkMatch() {
    // get currently selected flash card
    const flash = currentFlash.current;
    // get curreltly selected clue
    const clue = currentClue.current;

    if (flash && clue) {
      // check if flash and clue match by creating an object with both
      // and seeing if that exists in the FlashBang data set
      const result = flashBang.some((item) => {
        return (
          item.flashText === flash.dataset.flash &&
          item.flashClue === clue.dataset.clue
        );
      });
      // if Flash and Clue match
      if (result) {
        // reset the currently selected flash and clue
        // allows user to make another selection
        resetCurrent(false);
        // add the success classlist to flash - makes the flash card green
        flash.children[1].classList.add("flash-card-success");
        flash.classList.add("flash-card-success");
        // add success classList to clue
        clue.classList.add("clue-success");

        // make the successfull flash and clue unclickable
        unclickable(flash);
        unclickable(clue);
      } else {
        // reset currently selected if there was no match
        // argument - True : decreases one lifeline and shows error
        resetCurrent(true);
      }
    } else {
      //do nothing if both flash and clue hasnt been selected yet
      return null;
    }
  }

  function toggleCard(clickedBox) {
    toggleElement(
      clickedBox,
      flippedCards,
      setFlippedCards,
      currentFlash,
      "flash-card-active",
      "flash-card-error"
    );
  }

  function toggleClue(clickedBox) {
    toggleElement(
      clickedBox,
      cluesActive,
      setCluesActive,
      currentClue,
      "clue-active",
      "clue-error"
    );
  }

  const lifeHeart = `❤`;
  // function toggleCard(clickedBox) {
  //   const element = clickedBox.current;
  //   if (flippedCards.length === 0) {
  //     element.classList.toggle("flash-card-active");
  //     setFlippedCards([...flippedCards, element]);
  //   } else {
  //     //error animation on multiple flip attempt
  //     if (!flippedCards.includes(element)) {
  //       element.classList.toggle("flash-card-error");
  //       // remove the error animation after 100 seconds
  //       setTimeout(() => {
  //         element.classList.toggle("flash-card-error");
  //       }, 100);
  //     }
  //   }
  // }

  return (
    <div className="flashbang__container">
      <h1>FlashBang</h1>
      <div>Lifeline: {lifeHeart.repeat(hearts)}</div>
      <div className="flashbang__main">
        <div className="flashText">
          {flashBang.map((flashRow, index) => (
            <FlashCard
              toggleCard={toggleCard}
              info={flashRow.flashText}
              key={index}
              id={`${index}`}
            />
          ))}
        </div>
        <div className="clues">
          {flashBang.map((row, i) => (
            <Clue key={i} toggleClue={toggleClue} clueText={row.flashClue} />
          ))}
        </div>
      </div>

      {gameOver && (
        <div className="flash-over-background">
          <div className="flash-over-container flex">
            <div className="flash-over-modal flex">
              <h1>Game Over</h1>
              <div className="flash-over-buttons">
                <Link onClick={() => reset()}>Restart</Link>
                <Link to={"/games"}>Back to Menu</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
