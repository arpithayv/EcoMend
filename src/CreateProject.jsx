import React, { useState } from "react";
import "./CreateProject.css";

const questions = [
  { id: 1, question: "Title of the Project" },
  { id: 2, question: "Concise Project Description" },
  {
    id: 3,
    question:
      "Could you please elaborate on the Problem Statement or provide a detailed description?",
  },
  { id: 4, question: "How many team members are currently involved?" },
  {
    id: 5,
    question:
      "Please specify the target demographic, such as Students, Working Professionals, Freelancers, or affiliations with Institutions, Companies, NGOs, or Governmental Bodies.",
  },
  {
    id: 6,
    question:
      "Could you please indicate the current status of the Project? (Pre-, Post-, Current)",
  },
  {
    id: 7,
    question: "Do you have any visual assets available, such as a 3D view?",
  },
  {
    id: 8,
    question: "If applicable, include a link to a demo of the Project.",
  },
  {
    id: 9,
    question: "What is the projected investment requirement for the Project?",
  },
  { id: 10, question: "Please specify which components require investment." },
  {
    id: 11,
    question:
      "Why should potential investors consider investing in your Project?",
  },
  // Add more questions as needed
];

const CreateProject = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));

  const handleInputChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };

  const handleNextSlide = () => {
    if (currentSlide < questions.length / 2 - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePreviousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleSubmit = () => {
    // Handle submission logic here
    console.log("Answers:", answers);
  };

  return (
    <div>
      <h1 style={{ marginTop: "100px" }}>CREATE NEW PROJECT:</h1>
      <div className="slide">
        {questions
          .slice(currentSlide * 2, currentSlide * 2 + 2)
          .map((question, index) => (
            <div key={index}>
              <label>{question.question}</label>
              <textarea
                value={answers[currentSlide * 2 + index]}
                onChange={(e) =>
                  handleInputChange(currentSlide * 2 + index, e.target.value)
                }
                rows={5} // Set the number of rows
                cols={30} // Set the number of columns
                className="textbox"
              />
            </div>
          ))}
        <div>
          {currentSlide !== 0 && (
            <button onClick={handlePreviousSlide}>Previous</button>
          )}
          {currentSlide !== Math.floor(questions.length / 2) - 1 ? (
            <button onClick={handleNextSlide}>Next</button>
          ) : (
            <button className="submit" onClick={handleSubmit}>
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
