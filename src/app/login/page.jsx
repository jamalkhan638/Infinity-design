
'use client'
import LogoBanner from "@/components/ui/LogoBanner";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Container } from "react-bootstrap";

export default function login() {
  const [userName , setUserName] = useState()
  const [passowrd, setPassowrd] = useState()
  const router = useRouter()
  const [error, setError] = useState({
    username: "",
    passowrd: ""
  })
  const handleuserName = (e) =>{
    setUserName(e.target.value)
  }
  const handlePassword = (e) =>{
    setPassowrd(e.target.value)
  }
const handleValidate = () =>{
  let hasError = false
  if(!userName){
  setError({...error, username: "Please enter username"})
  hasError = true
  }
  else if(!passowrd){
    setError({...error, passowrd: "Please enter password"})
    hasError = true
    }
    return hasError
}

  const handleSubmit = () =>{
   
    if (handleValidate()){
   return
    }

    localStorage.setItem("userToken", "768787273gbbdkdbj782398278tbr2i")
    router.replace('/admin')
    
  }
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
                Lets SIGN IN...
              </h1>
            </div>
            <div style={{ marginLeft: "35%" }}>
              <div className="row row-cols-1 row-cols-md-2">
                <div className="col">
                  <input
                    type="text"
                    name="username"
                    onChange={handleuserName}
                    id="name"
                    placeholder="UserName"
                    className="form-control form-control-lg rounded-0 border-dark border-opacity-50"
                  />
                </div>
              
              </div>
              <p style={{color: "red"}}>{error?.username}</p>
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
              <p style={{color: "red"}}>{error?.passowrd}</p>
            </div>

            <div className="col w-100 mt-4 mt-xl-5 text-center">
              <button
              onClick={handleSubmit}
                className="btn btn-lg btn-outline-primary rounded-0"
                type="submit"
              >
                Submit
              </button>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}
