import React from "react";

const StepPersonalInfo = ({ formData, handleInputChange }) => {
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
        </div>
        <div className="col">
          <label className="d-block mb-1" htmlFor="dob">
            Date of Birth:
          </label>
          <input
            id="dob"
            name="dob"
            type="date"
            className="form-control rounded-0"
            value={formData.dob}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col">
          <label className="d-block mb-1" htmlFor="phoneNumber">
            Phone Number:
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            className="form-control rounded-0"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
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
        </div>
        <div className="col">
          <label className="d-block mb-1" htmlFor="sin">
            SIN:
          </label>
          <input
            id="sin"
            name="sin"
            type="text"
            className="form-control rounded-0"
            value={formData.sin}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
    </fieldset>
  );
};

export default StepPersonalInfo;
