import React, { useEffect, useState } from "react";
import InputMask from "react-input-mask";
const StepPersonalInfo = ({
  formData,
  handleInputChange,
  emaileerror,
  phoneNumberer,
  sinError,
  fnameErr,
  lnameErr,
  handleChangeSinvalidation
}) => {
  const [cdate, setCdate] = useState()

  useEffect(()=>{
    let newd = new Date()
    setCdate(formatDate(newd))
  },[])

  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }
 
  const handleKeyDown = (event) => {
    event.preventDefault(); // Prevent manual input via keyboard
  };

  const handlePaste = (event) => {
    event.preventDefault(); // Prevent pasting into the input field
  };
  
  return (
    <fieldset>
      <div className="text-center pb-lg-3">
        <h1 className="text-capitalize mb-5 display-5 fw-bold text-black text-line">
          Personal Information
        </h1>
      </div>
      <div className="row row-cols-1 row-cols-md-2 gy-3">
        <div className="col">
          <label className="d-block mb-1" htmlFor="firstName">
            First Name:
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            className="form-control rounded-0"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
  <p style={{ color: "red" }}>{fnameErr}</p>
        </div>
        <div className="col">
          <label className="d-block mb-1" htmlFor="lastName">
            Last Name:
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            className="form-control rounded-0"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
            <p style={{ color: "red" }}>{lnameErr}</p>
        </div>
        {
          cdate ?

        
        <div className="col">
          <label for="dateInput" className="d-block mb-1" htmlFor="dob">
            Date of Birth:
          </label>
          <input
            
            // id="dob"
            name="dob"
            type="date"
            min="1920-05-11" max={cdate}
            className="form-control rounded-0"
            value={formData.dob}
            onChange={handleInputChange}
            required
             id="dateInput"
             onKeyDown={handleKeyDown}
             onPaste={handlePaste}
          
          />
        </div>: null}
        <div className="col">
          <label className="d-block mb-1" htmlFor="phoneNumber">
            Phone Number:
          </label>
          {/* <input
            id="phoneNumber"
            name="phoneNumber"
            type="number"
            className="form-control rounded-0"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          /> */}

          <InputMask
           name="phoneNumber"
            onChange={(e) => {
              handleInputChange(e);
            }}
            className="form-control rounded-0"
           
            mask="999-999-9999"
            // value={formData.phoneNumber}
            defaultValue={formData.phoneNumber}
          />

          <p style={{ color: "red" }}>{phoneNumberer}</p>
        </div>
        <div className="col">
          <label className="d-block mb-1" htmlFor="email">
            Email:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-control rounded-0"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <p style={{ color: "red" }}>{emaileerror}</p>
        </div>
        <div className="col">
          <label className="d-block mb-1" htmlFor="sin">
            SIN:
          </label>
          {/* <input
            id="sin"
            name="sin"
            type="text"
            className="form-control rounded-0"
            value={formData.sin}
            onChange={handleInputChange}
            required
          /> */}
             <InputMask
           
            onChange={(e) => {
              handleInputChange(e),
              handleChangeSinvalidation(e)
            }}
            className="form-control rounded-0"
           name="sin"
            mask="999-999-999"
            // value={formData.sin}
            defaultValue={formData.sin}
          />
          <p style={{color: "red"}}>{sinError}</p>
        </div>
      </div>
    </fieldset>
  );
};

export default StepPersonalInfo;
