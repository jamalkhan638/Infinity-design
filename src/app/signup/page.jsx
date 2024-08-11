"use client";
import LogoBanner from "@/components/ui/LogoBanner";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { signup } from "../api/api";

export default function SignUp() {
  const [userName, setUserName] = useState();
  const [passowrd, setPassowrd] = useState();
  const router = useRouter();
  const [error, setError] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [state, setState] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleValidate = () => {
    let hasError = false;
    if (!state.email) {
      setError({ ...error, email: "Please enter email" });
      hasError = true;
    } else if (!state.password) {
      setError({ ...error, password: "Please enter password" });
      hasError = true;
    } else if (!state.firstName) {
      setError({ ...error, firstName: "Please enter first name" });
      hasError = true;
    } else if (!state.lastName) {
      setError({ ...error, lastName: "Please enter last name" });
      hasError = true;
    }
    return hasError;
  };

  const handleSubmit = async () => {
    let data = {
      email: state.email,
      password: state.password,
      firstName: state.firstName,
      lastName: state.lastName,
    };
    console.log("data", data);
    if (handleValidate()) {
      return;
    }

    const res = await signup(data);

    if (res?.data?.token) {
      localStorage.setItem("userToken", res?.data?.token);
      router.replace("/admin");
    }
  };
  return (
    <div>
      <main>
        <LogoBanner />
        <section className="py-5 position-relative">
          <span className="position-absolute top-0 end-0">
            <Image
              width={720}
              height={879}
              src="/assets/images/logo-p.png"
              alt="logo-p"
            />
          </span>

          <Container fluid="xxl" className="position-relative">
            <div className="text-center pb-lg-3">
              <h1 className="text-capitalize mb-5 display-5 fw-bold text-black text-line">
                Lets SIGN UP...
              </h1>
            </div>
            <div style={{ marginLeft: "35%" }}>
              <div className="row row-cols-1 row-cols-md-2 mt-3">
                <div className="col">
                  <input
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    id="name"
                    placeholder="First Name"
                    className="form-control form-control-lg rounded-0 border-dark border-opacity-50"
                  />
                </div>
              </div>
              <p style={{ color: "red" }}>{error?.firstName}</p>
              <div className="row row-cols-1 row-cols-md-2 mt-3">
                <div className="col">
                  <input
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    id="name"
                    placeholder="Last Name"
                    className="form-control form-control-lg rounded-0 border-dark border-opacity-50"
                  />
                </div>
              </div>
              <p style={{ color: "red" }}>{error?.lastName}</p>
              <div className="row row-cols-1 row-cols-md-2 mt-3">
                <div className="col">
                  <input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    id="name"
                    placeholder="email"
                    className="form-control form-control-lg rounded-0 border-dark border-opacity-50"
                  />
                </div>
              </div>
              <p style={{ color: "red" }}>{error?.email}</p>
              <div className="row row-cols-1 row-cols-md-2  mt-4">
                <div className="col">
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    id="name"
                    placeholder="Password"
                    className="form-control form-control-lg rounded-0 border-dark border-opacity-50"
                  />
                </div>
              </div>
              <p style={{ color: "red" }}>{error?.password}</p>
            </div>

            <div className="col w-100 mt-4 mt-xl-5 ms-5 text-center">
              <button
                style={{ marginLeft: "-17rem" }}
                onClick={handleSubmit}
                className="btn btn-lg btn-outline-primary rounded-0"
                type="submit"
              >
                Submit
              </button>
              <div
                style={{ marginLeft: "45%", marginTop: "-2rem" }}
                className="d-flex"
              >
                <p className="text-primary">Already have account </p>
                <p
                  onClick={() => {
                    router.push("/login");
                  }}
                  style={{ textDecoration: "underline", cursor: "pointer" }}
                  className="text-primary ms-2"
                >
                  Signin{" "}
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}
