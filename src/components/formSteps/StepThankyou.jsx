import React from "react";
import { Checkmark } from "react-checkmark";
const StepThankyou = () => {
  return (
    <fieldset>
      <div className="mx-auto text-center py-4" style={{ maxWidth: "34.5rem" }}>
        <div className="d-flex ">
          <h1 style={{ marginLeft: "8rem" , fontSize: "60px"}}  className="mb-3 display-5 fw-bold text-primary">Thankyou!</h1>{" "}
        <div className="ms-4 mt-2">
        <Checkmark  size="40px" color="green" />
          </div>  
        </div>

        <p className="mb-0 fs-5">
          Your data has been saved. Please contact at front Desk or reach out to
          your recruiter
        </p>
      </div>
    </fieldset>
  );
};

export default StepThankyou;
