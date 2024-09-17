import { CloseOutlined } from "@ant-design/icons";
import React from "react";
import { Button } from "react-bootstrap";
import { Checkmark } from "react-checkmark";
const StepFailed = () => {
  return (
    <fieldset>
      <div className="mx-auto text-center py-4" style={{ maxWidth: "34.5rem" }}>
        <div className="d-flex ">
          <h1
            style={{ marginLeft: "8rem" , fontSize: "60px"}}
            className="mb-3 display-5 fw-bold text-primary"
          >
            Test Failed
          </h1>
          <div className="crossdiv">
          <CloseOutlined style={{color: "white", height: "25px", fontSize: "26px", marginTop: "0.3rem"}}/>
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
    </fieldset>
  );
};

export default StepFailed;
