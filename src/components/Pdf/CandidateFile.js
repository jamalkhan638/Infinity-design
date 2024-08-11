import { getCandidateData } from "@/app/api/api";
import whmisQuizDataSelected from "@/data/whmisQuizDataSelected";
import whmisSymbolData from "@/data/whmisSymbolData";
import React, { Component } from "react";
import { Container, Form } from "react-bootstrap";

export class CandidateFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      gmpselecetd: [],
      whmisselected: [],
    };
  }
  async componentDidMount() {
    const res = await getCandidateData(this.props.id);
    this.setState({ data: res?.data?.data });
    let data1 = res?.data?.data;
    console.log("dat1", data1);
    whmisQuizDataSelected?.forEach((item, index) => {
      const values =
        data1?.whimp_qgmp_quizuizzArray?.length > 0 &&
        Object?.values(data1?.whimp_qgmp_quizuizzArray[0]);

      let newValue = values && values.shift();
      let mm = values && values.pop();
      console.log("mmm", values);
      values &&
        values?.forEach((item1, key) => {
          if (item1?.includes(index + 1)) {
            if (item1.includes("a")) {
              item.selectedOption = item.options[0];
            } else if (item1.includes("b")) {
              item.selectedOption = item.options[1];
            } else if (item1.includes("c")) {
              item.selectedOption = item.options[2];
            } else if (item1.includes("d")) {
              item.selectedOption = item.options[3];
            }
          }
        });
    });
    this.setState({ whmisselected: whmisQuizDataSelected });

    const gmpQuestionsDataSelected = [
      {
        question:
          "All employees are not allowed to bring any kind of nuts (peanuts, almonds, walnuts etc.)",
        options: ["True", "False"],
        selectedOption: data1?.gmp_quiz[0]?.peanutsallowed,
      },
      {
        question:
          "Jewelry (rings, watches, bracelets) are not permitted in the food plant.",
        options: ["True", "False"],
        selectedOption: data1?.gmp_quiz[0]?.watches,
      },
      {
        question:
          "Food, gum, drinks, candy, keys, phones are not allowed in the production area.",
        options: ["True", "False"],
        selectedOption: data1?.gmp_quiz[0]?.drinkscandy,
      },
      {
        question: "Employees should not be called to work if they are sick.",
        options: ["True", "False"],
        selectedOption: data1?.gmp_quiz[0]?.workplaceif,
      },
      {
        question:
          "Nail polish, fake nails and false eyelashes are not allowed in the food plant.",
        options: ["True", "False"],
        selectedOption: data1?.gmp_quiz[0]?.fakenails,
      },
      {
        question: "Sneezes and coughs must be blocked with arms, not hands.",
        options: ["True", "False"],
        selectedOption: data1?.gmp_quiz[0]?.sneezes,
      },
      {
        question:
          "Employees should not wear designated work clothing in lunchroom, lockers, washrooms.",
        options: ["True", "False"],
        selectedOption: data1?.gmp_quiz[0]?.designated,
      },
      {
        question: "Fingernails must be trimmed and clean.",
        options: ["True", "False"],
        selectedOption: data1?.gmp_quiz[0]?.fingernails,
      },
      {
        question:
          "Hand must not be washed and sanitized after using the washroom facilities.",
        options: ["True", "False"],
        selectedOption: data1?.gmp_quiz[0]?.sanitized,
      },
      {
        question: "Hands should be scrubbed for at least 20 seconds.",
        options: ["True", "False"],
        selectedOption: data1?.gmp_quiz[0]?.scrubbed,
      },
      {
        question:
          "It is not acceptable to wear perfume, aftershave, lotions and hand creams.",
        options: ["True", "False"],
        selectedOption: data1?.gmp_quiz[0]?.acceptable,
      },
      {
        question:
          "Cuts, open wounds and scratches must be reported immediately and covered with a waterproof covering.",
        options: ["True", "False"],
        selectedOption: data1?.gmp_quiz[0]?.scratches,
      },
      {
        question: "Smoking is permitted in the plant.",
        options: ["True", "False"],
        selectedOption: data1?.gmp_quiz[0]?.permitted,
      },
      {
        question:
          "Product must be protected and removed from the operation area if condensation is observed.",
        options: ["True", "False"],
        selectedOption: data1?.gmp_quiz[0]?.condensation,
      },
      {
        question:
          "Employees are responsible to inform the supervisor if they have signs of transmissible or infectious disease (flu, cold, diarrhea, vomiting, fever, etc.)",
        options: ["True", "False"],
        selectedOption: data1?.gmp_quiz[0]?.transmissible,
      },
      {
        question:
          "It is acceptable to leave your work station without permission.",
        options: ["True", "False"],
        selectedOption: data1?.gmp_quiz[0]?.workwithout,
      },
      {
        question:
          "Any product that comes in contact with the floor must be discarded.",
        options: ["True", "False"],
        selectedOption: data1?.gmp_quiz[0]?.contactwith,
      },
      {
        question:
          "It is okay to take products from the lines for personal consumption.",
        options: ["True", "False"],
        selectedOption: data1?.gmp_quiz[0]?.consumptionp,
      },
      {
        question: "Glass, ceramic, allergens are allowed in the workplace.",
        options: ["True", "False"],
        selectedOption: data1?.gmp_quiz[0]?.allergies,
      },
      {
        question: "Employees must maintain good personal hygiene all the time.",
        options: ["True", "False"],
        selectedOption: data1?.gmp_quiz[0]?.hygiene,
      },
    ];

    this.setState({ gmpselecetd: gmpQuestionsDataSelected });

    whmisSymbolData?.forEach((item, index)=>{
      item.ans = this.state.data?.signs_matchingArray?.length > 0 && this.state.data?.signs_matchingArray[index]?.is_correct
    })
  }

  render() {
    return (
      <div>
        <main>
          <section className="py-5">
            <Container fluid="xxl">
              <h1 className="fw-bold text-center text-capitalize mb-5">
                personal information
              </h1>
              <div className="row row-cols-2 row-cols-md-3 row-cols-xl-5 align-items-center gy-4">
                <div className="col">
                  <h6 className="mb-0 fw-semibold">First Name:</h6>
                  <p className="mb-0 text-capitalize text-truncate">
                    {this.state.data?.firstName}
                  </p>
                </div>
                <div className="col d-none d-xl-flex justify-content-center text-center">
                  <hr
                    style={{ width: "0.125rem" }}
                    className="border-0 bg-black py-4 opacity-100"
                  />
                </div>
                <div className="col">
                  <h6 className="mb-0 fw-semibold">Last Name:</h6>
                  <p className="mb-0 text-capitalize text-truncate">
                    {this.state.data?.lastName}
                  </p>
                </div>
                <div className="col d-none d-xl-flex justify-content-center text-center">
                  <hr
                    style={{ width: "0.125rem" }}
                    className="border-0 bg-black py-4 opacity-100"
                  />
                </div>
                <div className="col">
                  <h6 className="mb-0 fw-semibold">Date it Birth:</h6>
                  <p className="mb-0 text-truncate">{this.state.data?.dob}</p>
                </div>

                <div className="col">
                  <h6 className="mb-0 fw-semibold">Phone Number:</h6>
                  <p className="mb-0 text-truncate">
                    {this.state.data?.phoneNumber}
                  </p>
                </div>
                <div className="col d-none d-xl-flex justify-content-center text-center">
                  <hr
                    style={{ width: "0.125rem" }}
                    className="border-0 bg-black py-4 opacity-100"
                  />
                </div>
                <div className="col">
                  <h6 className="mb-0 fw-semibold">Email:</h6>
                  <p className="mb-0 text-truncate">{this.state.data?.email}</p>
                </div>
                <div className="col d-none d-xl-flex justify-content-center text-center">
                  <hr
                    style={{ width: "0.125rem" }}
                    className="border-0 bg-black py-4 opacity-100"
                  />
                </div>
                <div className="col">
                  <h6 className="mb-0 fw-semibold">SIN:</h6>
                  <p className="mb-0 text-truncate">{this.state.data?.sin}</p>
                </div>
              </div>
              <div className="mt-5 text-center mx-auto max-w-800">
                <h2 className="fw-bold text-center text-capitalize mb-4 pb-2">
                  Questionaire Answer
                  {this.state.data?.whimis_result < 16 ||
                  this.state.data?.gmp_result < 18
                    ? `(Test Failed)`
                    : null}
                </h2>
                <div className="d-flex flex-wrap gap-4 fs-5 mb-3">
                  <div className="border border-primary rounded-pill py-3 px-4 flex-fill d-flex gap-3">
                    <span className="fw-semibold me-auto">WHMIS Quiz</span>
                    <span className="fw-medium">
                      {this.state.data?.whimis_result}/18
                    </span>
                  </div>
                  <div className="border border-primary rounded-pill py-3 px-4 flex-fill d-flex gap-3">
                    <span className="fw-semibold me-auto">GMP Quiz</span>
                    <span className="fw-medium">
                      {this.state.data?.gmp_result}/20
                    </span>
                  </div>
                </div>
                {this.state.data?.whimis_result < 16 || this.state.data?.gmp_result < 18 ? (
                <>
                  <p className="mb-3 fw-medium">
                    Unfortumately you couldn't pass the test
                  </p>
              
                </>
              ) : null}
              
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
                {whmisSymbolData?.map((item, index) => (
                  <div key={index}>
                    <div className="mt-4 d-flex justify-content-between position-relative">
                      <div className="flex-fill w-100 mx-auto symbol-box-left p-2">
                        <h6 className="mb-1 fw-bold">{item.title}</h6>
                        <p className="mb-0 small">{item.description}</p>
                      </div>
                      <span className="line-match flex-fill d-none d-xl-flex">
                        <span className="line-primary" />
                      </span>
                      <div className="flex-fill w-100 mx-auto symbol-box-right p-2">
                        {/* <Image
                          width={56}
                          height={56}
                          src={item.imgSrc}
                          className="object-fit-contain"
                          alt={item.imgAlt}
                        /> */}
                         {
                        item?.ans ?
                        <p style={{color: "green"}}>Correct</p>
                        :
                        <p style={{color: "red"}}>Wrong</p>
                        }
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </fieldset>
              <fieldset className="mt-5">
                <h1 className="mb-5 pb-lg-3 text-center text-capitalize fw-bold text-black">
                  WHMIS Quiz
                </h1>
                {this.state.whmisselected?.map((quiz, index) => (
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
                          disabled={
                            quiz.selectedOption === option ? false : true
                          }
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
                {this.state.gmpselecetd ? (
                  <ul className="nav flex-column flex-nowrap gap-3">
                    {this.state.gmpselecetd?.map((quiz, index) => (
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
                ) : null}
              </fieldset>
            </Container>
          </section>
        </main>
      </div>
    );
  }
}
