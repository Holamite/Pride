import React, { useState } from "react";

const Accordion = ({ question, answer, id }) => {
  const [isOpen, setIsOpen] = useState(0);
  const isActive = isOpen === id;

  function handleToggle(id) {
    const nextIndex = isActive ? 0 : id;
    setIsOpen(nextIndex);
  }
  return (
    <div className="accordion-box">
      <div className="accordion-question-box">
        <p onClick={() => handleToggle(id)}>{question}</p>
        <button
          className="accordion-btn"
          type="button"
          onClick={() => handleToggle(id)}
        >
          {isActive ? "-" : "+"}
        </button>
      </div>
      <p
        className={
          isActive
            ? "accordion-answer accordion-answer-active"
            : "accordion-answer "
        }
      >
        {answer}
      </p>
    </div>
  );
};

export default Accordion;
