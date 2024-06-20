import whmisQuizData from "@/data/WhmisQuizData";
import whmisSymbolData from "@/data/WhmisSymbolData";
import Image from "next/image";
import React from "react";
import { Form } from "react-bootstrap";

const StepWhmisQuiz = ({ formData, handleInputChange, errors }) => {
  return (
    <>
      <fieldset>
        <div className="text-center pb-lg-3">
          <h1 className="mb-5 text-capitalize display-5 fw-bold text-black">
            Match the desciption to the symbol
          </h1>
          {whmisSymbolData.map((item, index) => (
            <div
              key={index}
              className="mt-4 d-flex flex-column flex-lg-row flex-wrap gap-2 justify-content-between"
            >
              <div className="flex-fill w-100 mx-auto symbol-box-left p-2">
                <h6 className="mb-1 fw-bold">{item.title}</h6>
                <p className="mb-0 small">{item.description}</p>
              </div>
              <div className="flex-fill w-100 mx-auto symbol-box-right p-2">
                <Image
                  width={56}
                  height={56}
                  src={item.imgSrc}
                  className="object-fit-contain"
                  alt={item.imgAlt}
                />
              </div>
            </div>
          ))}
        </div>
      </fieldset>
      <fieldset className="mt-5">
        <div className="text-center pb-lg-3">
          <h1 className="text-capitalize mb-5 display-5 fw-bold text-black">
            WHMIS <span className="text-line text-line-2">Quiz</span>
          </h1>
        </div>
        {whmisQuizData.map((quiz, index) => (
          <figure key={index} className="mt-4">
            <h6 className="mb-3 fw-bold">{quiz.question}</h6>
            <div className="row row-cols-1 row-cols-md-2 gy-1 px-2">
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
          </figure>
        ))}
      </fieldset>
    </>
  );
};

export default StepWhmisQuiz;
