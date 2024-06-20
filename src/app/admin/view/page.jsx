import MetaData from "@/components/seo/MetaData";
import gmpQuestionsData from "@/data/gmpQuestionsData";
import gmpQuestionsDataSelected from "@/data/gmpQuestionsDataSelected";
import whmisQuizDataSelected from "@/data/whmisQuizDataSelected";
import whmisSymbolData from "@/data/whmisSymbolData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container, Form } from "react-bootstrap";

const ViewPage = () => {
  return (
    <>
      <MetaData
        title="User View - Infinity employment"
        description="Infinity employment"
        keywords="employment, job"
      />
      <main>
        <section className="py-5">
          <Container fluid="xxl">
            <h1 className="fw-bold text-center text-capitalize mb-5">
              personal information
            </h1>
            <div className="row row-cols-2 row-cols-md-3 row-cols-xl-5 align-items-center gy-4">
              <div className="col">
                <h6 className="mb-0 fw-semibold">First Name:</h6>
                <p className="mb-0 text-capitalize text-truncate">Ajay</p>
              </div>
              <div className="col d-none d-xl-flex justify-content-center text-center">
                <hr
                  style={{ width: "0.125rem" }}
                  className="border-0 bg-black py-4 opacity-100"
                />
              </div>
              <div className="col">
                <h6 className="mb-0 fw-semibold">Last Name:</h6>
                <p className="mb-0 text-capitalize text-truncate">Kumar</p>
              </div>
              <div className="col d-none d-xl-flex justify-content-center text-center">
                <hr
                  style={{ width: "0.125rem" }}
                  className="border-0 bg-black py-4 opacity-100"
                />
              </div>
              <div className="col">
                <h6 className="mb-0 fw-semibold">Date it Birth:</h6>
                <p className="mb-0 text-truncate">25-12-1994</p>
              </div>

              <div className="col">
                <h6 className="mb-0 fw-semibold">Phone Number:</h6>
                <p className="mb-0 text-truncate">647-789-9875</p>
              </div>
              <div className="col d-none d-xl-flex justify-content-center text-center">
                <hr
                  style={{ width: "0.125rem" }}
                  className="border-0 bg-black py-4 opacity-100"
                />
              </div>
              <div className="col">
                <h6 className="mb-0 fw-semibold">Email:</h6>
                <p className="mb-0 text-truncate">testingOne@gmail.com</p>
              </div>
              <div className="col d-none d-xl-flex justify-content-center text-center">
                <hr
                  style={{ width: "0.125rem" }}
                  className="border-0 bg-black py-4 opacity-100"
                />
              </div>
              <div className="col">
                <h6 className="mb-0 fw-semibold">SIN:</h6>
                <p className="mb-0 text-truncate">213123</p>
              </div>
            </div>
            <div className="mt-5 text-center mx-auto max-w-800">
              <h2 className="fw-bold text-center text-capitalize mb-4 pb-2">
                Questionaire Answer (Test Failed)
              </h2>
              <div className="d-flex flex-wrap gap-4 fs-5 mb-3">
                <div className="border border-primary rounded-pill py-3 px-4 flex-fill d-flex gap-3">
                  <span className="fw-semibold me-auto">WHMIS Quiz</span>
                  <span className="fw-medium">6/18</span>
                </div>
                <div className="border border-primary rounded-pill py-3 px-4 flex-fill d-flex gap-3">
                  <span className="fw-semibold me-auto">GMP Quiz</span>
                  <span className="fw-medium">13/20</span>
                </div>
              </div>
              <p className="mb-3 fw-medium">
                Unfortumately you couldn't pass the test, Please click retake
                button to attempt again.
              </p>
              <Link
                href="/"
                className="btn btn-lg btn-primary px-4 rounded-pill text-white"
              >
                Retake Quiz
              </Link>
            </div>
          </Container>
        </section>
        <section className="py-5">
          <Container fluid="xxl" className="border-top border-3 border-black">
            <fieldset className="pt-5">
              <div className="text-center pb-lg-3">
                <h2 className="mb-5 text-capitalize fw-bold text-black">
                  Match the desciption to the symbol
                </h2>
                {whmisSymbolData.map((item, index) => (
                  <div
                    key={index}
                    className="mt-4 d-flex flex-column flex-lg-row flex-wrap gap-2 justify-content-between"
                  >
                    <div className="flex-fill w-100 mx-auto symbol-box-left p-2">
                      <h6 className="mb-1 fw-bold">{item.title}</h6>
                      <p className="mb-0 small">{item.description}</p>
                    </div>
                    <div className="flex-fill w-100 mx-auto symbol-box-right p-2">
                      <Image
                        width={56}
                        height={56}
                        src={item.imgSrc}
                        className="object-fit-contain"
                        alt={item.imgAlt}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </fieldset>
            <fieldset className="mt-5">
              <h1 className="mb-5 pb-lg-3 text-center text-capitalize fw-bold text-black">
                WHMIS Quiz
              </h1>
              {whmisQuizDataSelected.map((quiz, index) => (
                <figure key={index} className="mt-4">
                  <h6 className="mb-3 fw-bold">{quiz.question}</h6>
                  <div className="row row-cols-1 row-cols-md-2 gy-1 px-2">
                    {quiz.options.map((option, idx) => (
                      <Form.Check
                        key={idx}
                        type="radio"
                        name={quiz.question}
                        id={`${option}-${index}`} // Ensure each ID is unique
                        label={option}
                        value={option}
                        checked={quiz.selectedOption === option}
                        readOnly
                        disabled={quiz.selectedOption === option ? false : true}
                      />
                    ))}
                  </div>
                </figure>
              ))}
            </fieldset>
          </Container>
        </section>
        <section className="py-5">
          <Container fluid="xxl" className="border-top border-3 border-black">
            <fieldset className="pt-5">
              <h1 className="mb-5 pb-lg-3 text-center text-capitalize fw-bold text-black">
                GMP QUIZ
              </h1>
              <ul className="nav flex-column flex-nowrap gap-3">
                {gmpQuestionsDataSelected.map((quiz, index) => (
                  <li key={index}>
                    <div className="d-flex flex-wrap gap-2">
                      <h6
                        className="mb-0 fw-bold me-auto"
                        style={{ maxWidth: "54.5rem" }}
                      >
                        <span
                          className="d-inline-block me-2"
                          style={{ minWidth: "1.3rem" }}
                        >
                          {index + 1}.
                        </span>
                        <span>{quiz.question}</span>
                      </h6>
                      <div className="d-flex gap-2">
                        {quiz.options.map((option, idx) => (
                          <Form.Check
                            key={idx}
                            type="radio"
                            name={quiz.question}
                            id={`${option}-${index}`} // Ensure each ID is unique
                            label={option}
                            value={option}
                            checked={quiz.selectedOption === option}
                            readOnly
                            disabled={
                              quiz.selectedOption === option ? false : true
                            }
                          />
                        ))}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </fieldset>
          </Container>
        </section>
      </main>
    </>
  );
};

export default ViewPage;
