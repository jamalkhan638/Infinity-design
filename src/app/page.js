"use client";
import React, { useState } from "react";
import Banner from "@/components/ui/Banner";
import { Container, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import StepPersonalInfo from "@/components/formSteps/StepPersonalInfo";
import StepWhmisQuiz from "@/components/formSteps/StepWhmisQuiz";
import whmisQuizData from "@/data/whmisQuizData";
import StepGmpQuiz from "@/components/formSteps/StepGmpQuiz";
import gmpQuestionsData from "@/data/gmpQuestionsData";
import StepThankyou from "@/components/formSteps/StepThankyou";
import MetaData from "@/components/seo/MetaData";
import { registerCandidate } from "./api/api";

const validatePersonalInfo = (data) => {
  const { firstName, lastName, dob, phoneNumber, email, sin } = data;
  return firstName && lastName && dob && phoneNumber && email && sin;
};

const validateWhmisQuiz = (data) => {
  console.log("dddddddddddd", data);
  let valid = true;
  const errors = {};
  if (data?.whimis?.length < whmisQuizData?.length) {
    valid = false;
  }
  // whmisQuizData.forEach((quiz) => {
  //   if (!data[quiz.index]) {
  //     valid = false;
  //     errors[quiz.index] = "This question is required.";
  //   }
  // }
  // );

  return { valid, errors };
};

const validateGmpQuiz = (data) => {
  let valid = true;
  const errors = {};
  if (data?.gmp?.length < gmpQuestionsData?.length) {
    valid = false;
  }
  // gmpQuestionsData.forEach((quiz) => {
  //   if (!data[quiz.question]) {
  //     valid = false;
  //     errors[quiz.question] = "This question is required.";
  //   }
  // });

  return { valid, errors };
};

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    phoneNumber: "",
    email: "",
    sin: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [whimis, setWhimis] = useState([]);
  const [wdata, setWdata] = useState();
  const [wcheck, setWcheck] = useState([]);
  const [gmp, setgmp] = useState([]);
  const handleInputChangeWhimis = (e, question, index) => {
    const { name, value } = e.target;
    console.log("gg", name, value, index);
    let newVal = `${index + value}`;
    let newValue1 = `${index + " " + value}`;
    setWcheck([...wcheck, index]);
    if (!wcheck?.includes(index)) {
      setWhimis([...whimis, newVal]);
    }
  };
  const handleInputChangeGMP = (e, question) => {
    const { name, value } = e.target;
    setgmp([...gmp, value]);
  };

  console.log("wwwwwwwww", gmp);
  const handleInputChange = (e, question) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [question || name]: value,
    });
  };
  const handleNextStep = () => {
    // if(!formData.whimis){
    formData.whims = whimis;
    
    // }

    if (currentStep === 1) {
      // Step 1: Validate personal info
      if (validatePersonalInfo(formData)) {
        setCurrentStep(currentStep + 1); // Move to step 2
      } else {
        toast.error("Please fill in all required fields correctly.");
      }
    } else if (currentStep === 2) {
      // Step 2: Validate WHMIS quiz
      const { valid, errors } = validateWhmisQuiz(formData);
      if (valid) {
        setCurrentStep(currentStep + 1); // Move to step 3
      } else {
        setErrors(errors);
        toast.error("Please answer all the questions.");
      }
    } else if (currentStep === 3) {
      formData.gmp = gmp
      // Step 3: Validate GMP quiz
      const { valid, errors } = validateGmpQuiz(formData);
      if (valid) {
        setCurrentStep(currentStep + 1); // Move to step 4
      } else {
        setErrors(errors);
        toast.error("Please answer all the questions.");
      }
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
      formData.whims = whimis;
      formData.gmp = gmp
      formData.signs_matching = wdata
      console.log("Form submission triggered");

    const { valid, errors } = validateGmpQuiz(formData);
    console.log("Validation result:", { valid, errors });
    console.log("Form data:", formData);
  


    if (valid) {
      const res = await registerCandidate(formData)
      if(res){
        toast.info(res?.data?.data)
      setCurrentStep(4); // Update currentStep to 4 upon successful validation
      setSubmitted(true); // Set submitted to true after successful submission
      console.log("Submission successful, moving to step 4");
      toast.success("Thank you for your submission!");
      }

    } else { 
      setErrors(errors);
      console.log("Validation failed, errors:", errors);
      toast.error("Please answer all the questions.");
    }
  };

  const renderStep = () => {
    if (submitted) {
      return <StepThankyou />;
    }
    switch (currentStep) {
      case 1:
        return (
          <StepPersonalInfo
            formData={formData}
            handleInputChange={handleInputChange}
          />
        );
      case 2:
        return (
          <StepWhmisQuiz
            formData={formData}
            handleInputChange={handleInputChangeWhimis}
            errors={errors}
            setWdata={setWdata}
          />
        );
      case 3:
        return (
          <StepGmpQuiz
            formData={formData}
            handleInputChange={handleInputChangeGMP}
            errors={errors}
          />
        );
      // case 4:
      //   return <StepThankyou />;
    }
  };

  return (
    <>
      <MetaData
        title="Infinity employment"
        description="Infinity employment"
        keywords="employment, job"
      />
      <main>
        <Banner />
        <ToastContainer />
        <section className="py-5">
          <Container fluid="xxl">
            <div className="form-steps">
              <ul className="nav flex-nowrap gap-4 justify-content-center mx-auto w-90">
                <li>
                  <div
                    className={`form-step  ${currentStep >= 1 ? "active" : ""}`}
                  >
                    <span className="number-box">
                      <span className="number rounded-circle">
                        <span>01</span>
                        <h6 className="mb-0 title">Personal Information</h6>
                      </span>
                    </span>
                  </div>
                </li>
                <li className="flex-fill">
                  <div
                    className={`form-step  ${currentStep >= 2 ? "done" : ""}`}
                  >
                    <span className="number-box">
                      <span className="line flex-fill">
                        <span className="position-absolute top-0 start-0" />
                      </span>
                      <span className="number rounded-circle">
                        <span>02</span>
                        <h6 className="mb-0 title">WHMIS Quiz</h6>
                      </span>
                    </span>
                  </div>
                </li>
                <li className="flex-fill">
                  <div
                    className={`form-step  ${currentStep >= 3 ? "done" : ""}`}
                  >
                    <span className="number-box">
                      <span className="line flex-fill">
                        <span className="position-absolute top-0 start-0" />
                      </span>
                      <span className="number rounded-circle">
                        <span>03</span>
                        <h6 className="mb-0 title">GMP Quiz</h6>
                      </span>
                    </span>
                  </div>
                </li>
                <li className="flex-fill">
                  <div
                    className={`form-step ${currentStep === 4 ? "done" : ""}`}
                  >
                    <span className="number-box">
                      <span className="line flex-fill">
                        <span className="position-absolute top-0 start-0" />
                      </span>
                      <span className="number rounded-circle">
                        <span>04</span>
                        <h6 className="mb-0 title">Submission</h6>
                      </span>
                    </span>
                  </div>
                </li>
              </ul>
              <Form onSubmit={handleSubmit}>
                <div className="mt-5 pt-5">{renderStep()}</div>
                <div className="mt-5 text-center">
                  {!submitted && currentStep > 1 && (
                    <button
                      type="button"
                      className="btn btn-outline-primary rounded-0 me-2"
                      onClick={handlePrevStep}
                    >
                      Previous
                    </button>
                  )}
                  {!submitted && currentStep < 3 && (
                    <button
                      type="button"
                      className="btn btn-outline-primary rounded-0"
                      onClick={handleNextStep}
                    >
                      Next
                    </button>
                  )}
                  {!submitted && currentStep === 3 && (
                    <button
                      type="submit"
                      className="btn btn-outline-primary rounded-0"
                    >
                      Submit
                    </button>
                  )}
                </div>
              </Form>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
