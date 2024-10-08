"use client";
import LogoBanner from "@/components/ui/LogoBanner";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { userLogin } from "../api/api";
import { toast, ToastContainer } from "react-toastify";

export default function login() {
  const [email, setEmail] = useState();
  const [password, setPassowrd] = useState();
  const router = useRouter();
  const [error, setError] = useState({
    username: "",
    password: "",
  });
  const handleuserName = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassowrd(e.target.value);
  };
  const handleValidate = () => {
    let hasError = false;
    if (!email) {
      setError({ ...error, email: "Please enter email" });
      hasError = true;
    } else if (!password) {
      setError({ ...error, password: "Please enter password" });
      hasError = true;
    }
    return hasError;
  };

  const handleSubmit = async () => {
    let data = {
      email: email,
      password: password,
    };
    if (handleValidate()) {
      return;
    }
    const res = await userLogin(data);

    if (res?.response?.data?.message) {
      toast.error(res?.response?.data?.message);
    }
    if (res?.data?.token) {
      localStorage.setItem("userToken", res?.data?.token);
      router.replace("/admin");
    }
  };
  return (
    <div>
      <main>
        <ToastContainer />
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
                Lets SIGN IN...
              </h1>
            </div>
            <div style={{ marginLeft: "35%" }}>
              <div className="row row-cols-1 row-cols-md-2">
                <div className="col">
                  <input
                    type="text"
                    name="email"
                    onChange={handleuserName}
                    id="name"
                    placeholder="Email"
                    className="form-control form-control-lg rounded-0 border-dark border-opacity-50"
                  />
                </div>
              </div>
              <p style={{ color: "red" }}>{error?.username}</p>
              <div className="row row-cols-1 row-cols-md-2  mt-4">
                <div className="col">
                  <input
                    type="password"
                    name="password"
                    onChange={handlePassword}
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
                <p className="text-primary">Didn't have account </p>
                <p
                  onClick={() => {
                    router.push("/signup");
                  }}
                  style={{ textDecoration: "underline", cursor: "pointer" }}
                  className="text-primary ms-2"
                >
                  Signup{" "}
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}
