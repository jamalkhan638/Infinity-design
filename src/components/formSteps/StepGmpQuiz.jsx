import gmpQuestionsData from "@/data/gmpQuestionsData";
import React from "react";
import { Form } from "react-bootstrap";

const StepGmpQuiz = ({ formData, handleInputChange, errors }) => {
  return (
    <fieldset>
      <div className="text-center pb-lg-5">
        <h1 className="text-capitalize mb-5 display-5 fw-bold text-black">
          GMP QUIZ{" "}
          <span className="text-line text-line-3 lh-sm">
            (Good Manufacturing Practices)
          </span>
        </h1>
      </div>
      <ul className="nav flex-column flex-nowrap gap-3">
        {gmpQuestionsData.map((quiz, index) => (
          <li key={index}>
            <div className="d-flex flex-wrap gap-2">
              <h6
                className="mb-0 fw-bold me-auto"
                style={{ maxWidth: "54.5rem" }}
              >
                <span
                  className="d-inline-block me-2"
                  style={{ minWidth: "1.3rem" }}
                >
                  {index + 1}.
                </span>
                <span>{quiz.question}</span>
              </h6>
              <div className="d-flex gap-2">
                {quiz.options.map((option, idx) => (
                  <Form.Check
                    key={idx}
                    type="radio"
                    name={quiz.question}
                    id={`${option}-${index}`} // Ensure each ID is unique
                    label={option}
                    value={option}
                    checked={formData[quiz.question] === option}
                    onChange={(e) => handleInputChange(e, quiz.question)}
                    isInvalid={!!errors[quiz.question]}
                  />
                ))}
                <Form.Control.Feedback type="invalid">
                  {errors[quiz.question]}
                </Form.Control.Feedback>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </fieldset>
  );
};

export default StepGmpQuiz;
