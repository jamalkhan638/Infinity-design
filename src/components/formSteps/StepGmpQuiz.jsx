import gmpQuestionsData from "@/data/gmpQuestionsData";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

const StepGmpQuiz = ({ formData, namerror, name, handleInputChange, curdateerror, errors, handleInputChangeSignature, handleInputChangeDate }) => {
  const { pathname } = useRouter();
  const [curDate, setCurDate] = useState()
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }
  useEffect(() => {
    // some browsers (like safari) may require a timeout to delay calling this
    // function after a page has loaded; otherwise, it may not update the position
    window.scrollTo(0, 0);
    const date = new Date()
    
    setCurDate(formatDate(date))
  }, [pathname]);
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
                    id={`${quiz.question}-${option.value}-${index}`} // Ensure each ID is unique
                    label={option.label}
                    value={option.value}
                    // checked={formData[quiz.question] === option}
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
      <div className="row mt-5">
      <div className="col">
      <label className="d-block mb-1" htmlFor="dob">
             Signature
            </label>
      <div className="signdiv" >
            <p className="signature">{formData.firstName + " " + formData.lastName}</p>
          </div>
      </div>
      {/* <div className="col">
          <label className="d-block mb-1" htmlFor="firstName">
            Type your Name for Signature
          </label>
          <input
            id="firstName"
            name="name"
            type="text"
            className="form-control rounded-0"
            onChange={handleInputChangeSignature}
            required
          />
          <p style={{ color: "red" }}>{namerror}</p>
        </div> */}
          <div className="col">
            <label className="d-block mb-1" htmlFor="dob">
              Current Date
            </label>
            <input
              id="dob"
              name="date"
              type="date"
              defaultValue={curDate}
              className="form-control rounded-0"
              onChange={handleInputChangeDate}
              disabled
            />
                {/* <p style={{ color: "red" }}>{curdateerror}</p> */}
          </div>
  
      </div>
      {/* <div className="row mt-2">
      <div className="col">
      <label className="d-block mb-1" htmlFor="dob">
             Signature
            </label>
      <div className="signdiv" >
            <p className="signature">{name}</p>
          </div>
      </div>
      <div className="col">

      </div>
      </div> */}
      
    </fieldset>
  );
};

export default StepGmpQuiz;
