"use client";
import SearchIcon from "@/components/icons/SearchIcon";
import MetaData from "@/components/seo/MetaData";
import LogoBanner from "@/components/ui/LogoBanner";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container, Pagination, Table } from "react-bootstrap";

const AdminDashboardPage = () => {
  // Define the employee data array
  const employeeData = [
    {
      first_name: "Ajay",
      last_name: "Kumar",
      email: "testingOne@gmail.com",
      phone_number: "647-789-9875",
      sin: "213123",
    },
    {
      first_name: "testing",
      last_name: "One",
      email: "testingOne@gmail.com",
      phone_number: "647-789-9875",
      sin: "213123",
    },
    {
      first_name: "testing",
      last_name: "One",
      email: "testingOne@gmail.com",
      phone_number: "647-789-9875",
      sin: "213123",
    },
    {
      first_name: "testing",
      last_name: "One",
      email: "testingOne@gmail.com",
      phone_number: "647-789-9875",
      sin: "213123",
    },
    {
      first_name: "Ajay",
      last_name: "Kumar",
      email: "testingOne@gmail.com",
      phone_number: "647-789-9875",
      sin: "213123",
    },
    {
      first_name: "testing",
      last_name: "One",
      email: "testingOne@gmail.com",
      phone_number: "647-789-9875",
      sin: "213123",
    },
    {
      first_name: "testing",
      last_name: "One",
      email: "testingOne@gmail.com",
      phone_number: "647-789-9875",
      sin: "213123",
    },
    {
      first_name: "testing",
      last_name: "One",
      email: "testingOne@gmail.com",
      phone_number: "647-789-9875",
      sin: "213123",
    },
    {
      first_name: "testing",
      last_name: "One",
      email: "testingOne@gmail.com",
      phone_number: "647-789-9875",
      sin: "213123",
    },
    {
      first_name: "testing",
      last_name: "One",
      email: "testingOne@gmail.com",
      phone_number: "647-789-9875",
      sin: "213123",
    },
    // Add more employees as needed
  ];

  return (
    <>
      <MetaData
        title="Admin - Infinity employment"
        description="Infinity employment"
        keywords="employment, job"
      />
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
            <h1 className="text-center text-capitalize mb-5 display-5 fw-bold text-black">
              ADMIN <span className="text-line text-line lh-lg">DASHBOARD</span>
            </h1>
            <div className="mb-5 position-relative mx-auto max-w-600">
              <input
                type="search"
                name="table-search"
                id="table-search"
                className="form-control border-primary rounded-pill py-3 ps-4 pe-5"
                placeholder="Search..."
              />
              <span className="position-absolute top-0 end-0 py-3 pe-3">
                <SearchIcon />
              </span>
            </div>
            <form className="mb-5">
              <div className="row row-cols-1 row-cols-md-2 gy-4">
                <div className="col">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    className="form-control form-control-lg rounded-0 border-dark border-opacity-50"
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="phone_number"
                    id="phone_number"
                    placeholder="Phone"
                    className="form-control form-control-lg rounded-0 border-dark border-opacity-50"
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="sin"
                    id="sin"
                    placeholder="SIN"
                    className="form-control form-control-lg rounded-0 border-dark border-opacity-50"
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="keywords"
                    id="keywords"
                    placeholder="Keywords"
                    className="form-control form-control-lg rounded-0 border-dark border-opacity-50"
                  />
                </div>
              </div>
              <div className="col w-100 mt-4 mt-xl-5 text-center">
                <button
                  className="btn btn-lg btn-outline-primary rounded-0"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
            <Table
              responsive
              striped
              bordered
              hover
              className="text-center text-nowrap"
            >
              <thead className="fs-5">
                <tr>
                  <th className="bg-primary text-white">Name</th>
                  {/* <th className="bg-primary text-white">Email</th> */}
                  <th className="bg-primary text-white">Phone Number</th>
                  <th className="bg-primary text-white">SIN</th>
                  <th className="bg-primary text-white">GMP/WHIMS</th>
                </tr>
              </thead>
              <tbody>
                {employeeData.map((employee, index) => (
                  <tr key={index}>
                    <td className="text-capitalize">
                      {employee.first_name} {employee.last_name}
                    </td>
                    {/* <td>{employee.email}</td> */}
                    <td>{employee.phone_number}</td>
                    <td>{employee.sin}</td>
                    <td>
                      <div className="d-flex justify-content-center gap-1">
                        <Link href="/admin/view">View</Link>
                        <span className="text-primary">|</span>
                        <a href="/admin/view" download>
                          Download
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Pagination className="justify-content-center">
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item disabled>{3}</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </Container>
        </section>
      </main>
    </>
  );
};

export default AdminDashboardPage;
