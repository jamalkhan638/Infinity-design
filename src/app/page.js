"use client";
import React, { useEffect, useState } from "react";
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
import { registerCandidate, removeDashes, sinCheck } from "./api/api";
import { useSearchParams } from "next/navigation";



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
  const validateWhmisQuiz = (data) => {
    console.log("dddddddddddd", data, wdata);
    let valid = true;
    const errors = {};
    
    if (data?.whims?.length < whmisQuizData?.length) {
      valid = false;
    }
    if(wdata?.length < 9){
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
  const [wdata, setWdata] = useState([]);
  const [wcheck, setWcheck] = useState([]);
  const [gmp, setgmp] = useState([]);
  const [emaileerror, setEmaillError] = useState();
  const [phoneNumberer, setPhoneNumberError] = useState();
  const [sinError, setSinError] = useState();
  const [fnameErr, setFanmeErr] = useState();
  const [lnameErr, setLnameErr] = useState();
  const [dateError, setDateError] = useState()
  const validatePersonalInfo =   (data) => {
    const { firstName, lastName, dob, phoneNumber, email, sin } = data;
    let data1 = {
      sin: sin
    }
  

    if (handlValidate(firstName, lastName, dob, phoneNumber, email, sin)) {
      return;
    }
   
    // if(sinError){
    //   return
    // }

    return firstName && lastName && dob && phoneNumber && email && sin;
  };

  // const handlesincheck = async (text) =>{

  // }

  const handlValidate = (firstName, lastName, dob, phoneNumber, email, sin) => {
    const actuallCode = phoneNumber
    .replaceAll("_", "")
    .replaceAll("-", "");

  var strlengths = actuallCode.length;
    let hasErrr = false;
    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      setEmaillError("Please enter valid email");
      hasErrr = true;
    }
    if (!sin.match(/^(\d{3}-\d{3}-\d{3})|(\d{9})$/)) {
      setSinError("Sin format is not valid");
      hasErrr = true;
    }

    if (!firstName.match(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)) {
      setFanmeErr("Only characters allowed");
      hasErrr = true;
    }
    if (!lastName.match(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)) {
      setLnameErr("Only characters allowed");
      hasErrr = true;
    }

    if (strlengths < 10) {
      setPhoneNumberError("Must enter 10 numeric values");
      hasErrr = true;
    }
if(dateError){
  hasErrr = true;
}
    return hasErrr;
  };

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
  const [cdate, setCdate] = useState();
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
    let newd = new Date();
    setCdate(formatDate(newd));
  }, []);
  console.log("wwwwwwwww", gmp);
  const handleInputChange = (e, question) => {
    setEmaillError("");
    setSinError("");
    setFanmeErr("");
    setLnameErr("");
 
    setPhoneNumberError("")
    const { name, value } = e.target;
    console.log("name", name, value);
    if(name == "dob"){
      setDateError("")
      let date1 = value
      let date2 = new Date(date1)
      let date3 = new Date(cdate)
      console.log("event", date2, cdate);
      if(date2.getTime() >= date3.getTime()){
        setDateError("invalid Date")
      }
    }

    setFormData({
      ...formData,
      [question || name]: value,
    });
  };
  const handleNextStep = async () => {
    // if(!formData.whimis){
    formData.whims = whimis;

    // }

    if (currentStep === 1) {
      // Step 1: Validate personal info
      if (validatePersonalInfo(formData)) {
        let data1 = {
          sin: formData?.sin
        }
        const  res = await sinCheck(data1)
        if(res?.data?.data === "User Already Exist"){
          toast.error("Sin already exist")
          return
        }
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
      formData.gmp = gmp;
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

  
  const handleChangeSinvalidation = async (e) => {
    //   let text = e.target.value
    //  const  res = await sinCheck(text)
  };
 

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const searchParams = useSearchParams()
  useEffect(()=>{
   
    const retake = searchParams.get('retake');
    console.log("ss", retake)
    if(retake){
      setCurrentStep(2)
    }

  },[searchParams])
  const retake = searchParams.get('retake')
  const id = searchParams.get('id')
  const handleSubmit = async (e) => {
    
    e.preventDefault(); 

    formData.whims = whimis;
    formData.gmp = gmp;
    formData.signs_matching = wdata;
    formData.is_retake = retake ? true : false
    formData.id = id
    console.log("Form submission triggered");

    const { valid, errors } = validateGmpQuiz(formData);
    console.log("Validation result:", { valid, errors });
    console.log("Form data:", formData);

    if (valid) {
      const res = await registerCandidate(formData);
      if (res) {
        toast.info(res?.data?.data);
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
            handleChangeSinvalidation = {handleChangeSinvalidation}
            emaileerror={emaileerror}
            phoneNumberer={phoneNumberer}
            sinError={sinError}
            fnameErr={fnameErr}
            lnameErr={lnameErr}
            setDateError = {setDateError}
            dateError = {dateError}
           
          />
        );
      case 2:
        return (
          <StepWhmisQuiz
            formData={formData}
            handleInputChange={handleInputChangeWhimis}
            errors={errors}
            wdata = {wdata}
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
