import { CloseOutlined } from "@ant-design/icons";
import React from "react";
import { Button } from "react-bootstrap";
import { Checkmark } from "react-checkmark";
const StepFailed = ({ testInfo }) => {
  console.log("tt", testInfo);
  return (
    <fieldset>
      {testInfo ? (
        <div
          className="mx-auto text-center py-4"
          style={{ maxWidth: "34.5rem" }}
        >
          <div className="d-flex ">
            <h1
              style={{ marginLeft: "8rem", fontSize: "60px" }}
              className="mb-3 display-5 fw-bold text-primary"
            >
              Test Failed
            </h1>
            <div className="crossdiv">
              <CloseOutlined
                style={{
                  color: "white",
                  height: "25px",
                  fontSize: "26px",
                  marginTop: "0.3rem",
                }}
              />
            </div>
          </div>
          <div className="d-flex flex-wrap gap-4 fs-5 mb-3">
            <div className="border border-primary rounded-pill py-3 px-4 flex-fill d-flex gap-3">
              <span className="fw-semibold me-auto">WHMIS Quiz</span>
              <span className="fw-medium">
                {testInfo?.whimisObtain}/{testInfo?.whimisTotal}
              </span>
            </div>
            <div className="border border-primary rounded-pill py-3 px-4 flex-fill d-flex gap-3">
              <span className="fw-semibold me-auto">GMP Quiz</span>
              <span className="fw-medium">
                {testInfo?.gmpObtain}/{testInfo?.gmpTotal}
              </span>
            </div>
          </div>
          <Button
            // onClick={() => {
            //   handleClickRetake();
            // }}
            href={`/`}
            className="btn btn-lg btn-primary px-4 rounded-pill text-white"
          >
            Retake Quiz
          </Button>
        </div>
      ) : null}
    </fieldset>
  );
};

export default StepFailed;
