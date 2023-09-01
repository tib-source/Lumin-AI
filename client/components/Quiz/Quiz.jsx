/* eslint-disable no-mixed-spaces-and-tabs */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Question from "./Question";
import { useDispatch, useSelector } from "react-redux";
import { getQuiz } from "../../src/redux/general/generalActions";

export default function Quiz() {
  const dispatch = useDispatch();
  const { type, topic, level, loading } = useSelector((state) => state.general);
  const [correctAns, setCorrectAns] = useState(0);
  const [questions, setQuestions] = useState([]);
  const questionTypes = {
    trueFalse: "True or False",
    multipleChoice: "Multiple Choice",
    fillBlank: "Fill the Blank",
  };

  console.log("hello");
  useEffect(() => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    dispatch(getQuiz()).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setQuestions(data.payload.result.questions);
      }
    });
  }, [dispatch]);

  const handleCorrectAns = () => {
    setCorrectAns(correctAns + 1);
  };
  return (
    <div className="quiz">
      <div className="quiz__header">
        <h1>{questionTypes[type]}</h1>
        <h3>{correctAns} / 10</h3>
        <p>Topic: {topic}</p>
        <p>Level: {level || "undefined"}</p>
      </div>
      {loading ? (
        <div className="loading">Loading</div>
      ) : (
        questions.map(({ question, answer, choices }, index) => {
          return (
            <Question
              key={index}
              question={question}
              answer={answer}
              choices={choices || "undefined"}
              type={type}
              index={index + 1}
              handleCorrect={handleCorrectAns}
            />
          );
        })
      )}
    </div>
  );
}
