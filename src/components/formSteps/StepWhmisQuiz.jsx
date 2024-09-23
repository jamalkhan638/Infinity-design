import whmisQuizData from "@/data/whmisQuizData";
import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import CustomNodeFlow from "../line-match/CustomNodeFlow";
import SymbolMatch from "../line-match/SymbolMatch";
import Image from "next/image";



const StepWhmisQuiz = ({ formData, handleInputChange, errors, setWdata , wdata}) => {


console.log("formDayta", formData, wdata)
  return (
    <>
      <fieldset>
        <div className="text-center pb-lg-3">
          <h1 className="mb-5 text-capitalize display-5 fw-bold text-black">
            Match the desciption to the symbol
          </h1>
          <CustomNodeFlow setWdata={setWdata} wdata = {wdata}/>
          {/* <SymbolMatch /> */}
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
          
            <h6 className="mb-3 fw-bold">{index + 1 + " . " + quiz.question}</h6>
            <div className="row row-cols-1 row-cols-md-2 gy-1 px-2">
              {quiz.options.map((option, idx) => (
                <div className="d-flex">
            <p style={{fontWeight: "500"}}>{option.value.toUpperCase()}</p>
                <Form.Check
                style={{marginLeft: "6px"}}
                  key={idx}
                  type="radio"
                  name={quiz.question}
                  id={`${option.value}-${index}`} // Ensure each ID is unique
                  label={option.label}
                  value={option.value}
                  checked={formData?.whims[index]?.includes(option.value)}
                  onChange={(e) =>
                    handleInputChange(e, quiz.question, quiz.index)
                  }
                  isInvalid={!!errors[quiz.question]}
                />
                
                    </div>
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
