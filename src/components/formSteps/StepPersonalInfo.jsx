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
          <label className="d-block mb-1" htmlFor="first_name">
            First Name:
          </label>
          <input
            id="first_name"
            name="first_name"
            type="text"
            className="form-control rounded-0"
            value={formData.first_name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col">
          <label className="d-block mb-1" htmlFor="last_name">
            Last Name:
          </label>
          <input
            id="last_name"
            name="last_name"
            type="text"
            className="form-control rounded-0"
            value={formData.last_name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col">
          <label className="d-block mb-1" htmlFor="date_birth">
            Date of Birth:
          </label>
          <input
            id="date_birth"
            name="date_birth"
            type="date"
            className="form-control rounded-0"
            value={formData.date_birth}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col">
          <label className="d-block mb-1" htmlFor="phone_number">
            Phone Number:
          </label>
          <input
            id="phone_number"
            name="phone_number"
            type="tel"
            className="form-control rounded-0"
            value={formData.phone_number}
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
