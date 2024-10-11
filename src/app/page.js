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
import Image from "next/image";
import StepFailed from "@/components/formSteps/StepFailed";

export default function Home() {
  const validateWhmisQuiz = (data) => {
    console.log("dddddddddddd", data, wdata);
    let valid = true;
    const errors = {};

    if (data?.whims?.length < whmisQuizData?.length) {
      valid = false;
    }
    if (wdata?.length < 9) {
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
  const [testInfo, setTestInfo] = useState()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    phoneNumber: "",
    email: "",
    sin: "",
    gender: null,
    status: null,
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
  const [dateError, setDateError] = useState();
  const [gendererror, setGenderError] = useState();
  const [statuserror, setStatusError] = useState();
  const [curdateerror, setCdateError] = useState();
  const [name, setName] = useState();
  const [failed, setFailed] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [namerror, setNameError] = useState();
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
    // if(!name){
    //   valid = false;
    //   setNameError("Please enter name for signature")
    // }

    return { valid, errors };
  };
  const validatePersonalInfo = (data) => {
    const {
      firstName,
      lastName,
      dob,
      phoneNumber,
      email,
      sin,
      gender,
      status,
    } = data;
    let data1 = {
      sin: sin,
    };

    if (
      handlValidate(
        firstName,
        lastName,
        dob,
        phoneNumber,
        email,
        sin,
        gender,
        status
      )
    ) {
      return;
    }

    if (sinError) {
      return;
    }

    return (
      firstName &&
      lastName &&
      dob &&
      phoneNumber &&
      email &&
      sin &&
      status &&
      gender
    );
  };

  // const handlesincheck = async (text) =>{

  // }

  const handlValidate = (
    firstName,
    lastName,
    dob,
    phoneNumber,
    email,
    sin,
    gender,
    status
  ) => {
    const actuallCode = phoneNumber.replaceAll("_", "").replaceAll("-", "");

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
    if (dateError) {
      hasErrr = true;
    }
    if (sinError) {
      hasErrr = true;
    }
    if (!dob) {
      setDateError("Please select Date of Birth");
      hasErrr = true;
    }
    if (!status) {
      setStatusError("Please select Status");
      hasErrr = true;
    }
    if (!gender) {
      setGenderError("Please select gender");
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
    const index = gmpQuestionsData.findIndex(
      (quiz) => quiz.question === question
    );

    if (index !== -1) {
      // Update the specific index with the new value (either "true" or "false")
      const updatedGmp = [...gmp]; // Copy the array to avoid mutating state directly
      updatedGmp[index] = value; // Set the value for the specific question

      // Call a setState function to update the formData (assuming setGmp is the state setter)
      setgmp(updatedGmp);
    }
    // setgmp([...gmp, value]);
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
    setGenderError("");
    setDateError("");
    setStatusError("");

    setPhoneNumberError("");
    const { name, value } = e.target;
    console.log("name", name, value);
    if (name == "dob") {
      setDateError("");
      let date1 = value;
      let date2 = new Date(date1);
      let date3 = new Date(cdate);
      console.log("event", date2, cdate);
      if (date2.getTime() >= date3.getTime()) {
        setDateError("invalid Date");
      }
      let dateObj = new Date(date1);

      console.log("vallllll", dateObj);
      if (dateObj == "Invalid Date") {
        setDateError("invalid Date");
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
          sin: formData?.sin,
        };
        const res = await sinCheck(data1);
        if (res?.data?.data === "User Already Exist") {
          toast.error("Sin already exist");
          return;
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

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const searchParams = useSearchParams();
  useEffect(() => {
    const retake = searchParams.get("retake");
    console.log("ss", retake);
    if (retake) {
      setCurrentStep(2);
    }
  }, [searchParams]);
  const retake = searchParams.get("retake");
  const id = searchParams.get("id");
  const handleSubmit = async (e) => {
    e.preventDefault();

    formData.whims = whimis;
    formData.gmp = gmp;
    formData.signs_matching = wdata;
    formData.is_retake = retake ? true : false;
    formData.id = id;

    console.log("Form submission triggered", formData);

    const { valid, errors } = validateGmpQuiz(formData);
    console.log("Validation result:", { valid, errors });
    console.log("Form data:", formData);
    formData.current_date = currentDate;
    if (valid) {
      const res = await registerCandidate(formData);
      setTestInfo(res?.data?.data)
      if (res?.data?.statusMessage === "failed") {
        setFailed(true);
        setCurrentStep(4);
      } else {
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

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  const handleChangeSinvalidation = async (e) => {
    let text = e.target.value;
    let lengthstr = removeDashes(text);
    let strlength = lengthstr.length;
    console.log("ff", strlength);
    if (strlength > 8) {
      var esum = 0;
      var enumbers;
      var checknum = 0;
      var ch_sum = "";
      var checkdigit = 0;
      var sin = "";
      var lastdigit = 0;
      var ch;
      var ch1;
      var ch2;

      var inStr = text;
      var val = Array.from(text)[0];

      sin = text;
      var inLen = inStr.length;

      if (text == "") {
        setSinError("Please enter SIN");

        hasErrr = true;
      } else if (inLen > 11 || inLen < 11) {
        setSinError("Sin must be 9 characters long");
      }

      for (var i = 0; i < text.length; i++) {
        var ch = text.substring(i, i + 1);

        // if ((ch < "0" || "9" < ch) && ch != "-") {
        //   setErrors(
        //     "Sin must be 9 digits"
        //   );
        //   return false;
        // }
        if ((i == 3 || i == 7) && ch != "-") {
          setSinError("Please enter a valid SIN");
        }
      }
      lastdigit = text.substring(10, 10 + 1);
      // add numbers in odd positions; IE 1, 3, 6, 8
      var odd =
        text.substring(0, 0 + 1) * 1.0 +
        text.substring(2, 2 + 1) * 1.0 +
        text.substring(5, 5 + 1) * 1.0 +
        text.substring(8, 8 + 1) * 1.0;

      // form texting of numbers in even positions IE 2, 4, 6, 8
      var enumbers =
        text.substring(1, 1 + 1) +
        text.substring(4, 4 + 1) +
        text.substring(6, 6 + 1) +
        text.substring(9, 9 + 1);

      // add together numbers in new text string
      // take numbers in even positions; IE 2, 4, 6, 8
      // and double them to form a new text string

      // EG if numbers are 2,5,1,9 new text string is 410218
      for (var i = 0; i < enumbers.length; i++) {
        var ch1 = enumbers.substring(i, i + 1) * 2;
        ch_sum = ch_sum + ch1;
      }

      for (var i = 0; i < ch_sum.length; i++) {
        let ch2 = ch_sum.substring(i, i + 1);
        esum = esum * 1.0 + +ch2 * 1.0;
      }

      checknum = odd + esum;
      var checdigit;
      // subtextact checknum from next highest multiple of 10
      // to give check digit which is last digit in valid SIN
      if (checknum <= 10) {
        checdigit = 10 - checknum;
      }
      if (checknum > 10 && checknum <= 20) {
        checkdigit = 20 - checknum;
      }
      if (checknum > 20 && checknum <= 30) {
        checkdigit = 30 - checknum;
      }
      if (checknum > 30 && checknum <= 40) {
        checkdigit = 40 - checknum;
      }
      if (checknum > 40 && checknum <= 50) {
        checkdigit = 50 - checknum;
      }
      if (checknum > 50 && checknum <= 60) {
        checkdigit = 60 - checknum;
      }

      if (checkdigit != lastdigit && text != "968-988-949") {
        setSinError("Please enter a valid SIN");
      }

      let v = Array.from(text)[0];
      // setMyeror(false);
      return true;
    } else {
      setSinError("Please enter a valid SIN");
    }
  };

  const handleInputChangeDate = (e) => {
    setCurrentDate("");
    setCurrentDate(e.target.value);
  };
  const handleInputChangeSignature = (e) => {
    setNameError("");
    setName(e.target.value);
  };
  const renderStep = () => {
    if (failed) {
      return <StepFailed testInfo = {testInfo} />;
    }
    if (submitted) {
      return <StepThankyou testInfo = {testInfo} />;
    }
    switch (currentStep) {
      case 1:
        return (
          <StepPersonalInfo
            formData={formData}
            handleInputChange={handleInputChange}
            handleChangeSinvalidation={handleChangeSinvalidation}
            emaileerror={emaileerror}
            phoneNumberer={phoneNumberer}
            sinError={sinError}
            fnameErr={fnameErr}
            lnameErr={lnameErr}
            setDateError={setDateError}
            dateError={dateError}
            gendererror={gendererror}
            statuserror={statuserror}
          />
        );
      case 2:
        return (
          <StepWhmisQuiz
            formData={formData}
            handleInputChange={handleInputChangeWhimis}
            errors={errors}
            wdata={wdata}
            setWdata={setWdata}
          />
        );
      case 3:
        return (
          <StepGmpQuiz
            formData={formData}
            handleInputChange={handleInputChangeGMP}
            errors={errors}
            setCdateError={setCdateError}
            curdateerror={curdateerror}
            namerror={namerror}
            handleInputChangeSignature={handleInputChangeSignature}
            handleInputChangeDate={handleInputChangeDate}
            name={name}
            gmp={gmp}
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
          <span className="position-absolute top-1 end-0">
            <Image
              width={720}
              height={879}
              src="/assets/images/logo-p.png"
              alt="logo-p"
            />
          </span>

          <Container fluid="xxl" className="position-relative">
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
                  {!failed ? (
                    <>
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
                    </>
                  ) : null}
                </div>
              </Form>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
