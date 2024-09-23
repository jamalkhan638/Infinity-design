"use client";

import withAuth from "@/components/auth-provider";
import SearchIcon from "@/components/icons/SearchIcon";
import MetaData from "@/components/seo/MetaData";
import LogoBanner from "@/components/ui/LogoBanner";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { Container, Pagination, Table } from "react-bootstrap";
import {
  getAllCandidates,
  getCandidateData,
  getWorkerFileteredData,
} from "../api/api";

import ReactToPrint from "react-to-print";
import { CandidateFile } from "@/components/Pdf/CandidateFile";
import whmisQuizDataSelected from "@/data/whmisQuizDataSelected";
import { toast, ToastContainer } from "react-toastify";

const AdminDashboardPage = () => {
  const [data, setData] = useState();
  const [data1, setData1] = useState();
  const [gmpselecetd, setGMPSelected] = useState();
  const [whimisselecetd, setWhimisSelected] = useState();
  const [state, setState] = useState({
    name: "",
    email: "",
    sin: null,
    phone: null,
  });
  useEffect(() => {
    handleGetAllCandidatesData();
  }, []);

  const handleGetAllCandidatesData = async () => {
    const res = await getAllCandidates();
    setData(res?.data?.data);
  };
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    let data = {
      phone: state.phone,
      email: state.email,
      name: state.name,
      sin: state.sin,
    };

    const res = await getWorkerFileteredData(data);
    if (res?.data?.records?.responseData?.data) {
      setData(res?.data?.records?.responseData?.data);
    } else {
      toast.error(res?.data?.records?.responseData);
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10; // Number of records per page
  const totalPages = Math.ceil(data?.length / recordsPerPage);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  // Slice the data to get the records for the current page
  const currentRecords = data?.slice(indexOfFirstRecord, indexOfLastRecord);
  const componentRef = useRef();

  return (
    <>
      <MetaData
        title="Admin - Infinity employment"
        description="Infinity employment"
        keywords="employment, job"
      />
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
            <h1 className="text-center text-capitalize mb-5 display-5 fw-bold text-black">
              ADMIN <span className="text-line text-line lh-lg">DASHBOARD</span>
            </h1>
            {/* <div className="mb-5 position-relative mx-auto max-w-600">
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
            </div> */}

            <div className="row row-cols-1 row-cols-md-2 gy-4">
              <div className="col">
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={handleChange}
                  placeholder="Name"
                  className="form-control form-control-lg rounded-0 border-dark border-opacity-50"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  name="phone"
                  onChange={handleChange}
                  id="phone"
                  placeholder="Phone"
                  className="form-control form-control-lg rounded-0 border-dark border-opacity-50"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  name="sin"
                  onChange={handleChange}
                  id="sin"
                  placeholder="SIN"
                  className="form-control form-control-lg rounded-0 border-dark border-opacity-50"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  onChange={handleChange}
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="form-control form-control-lg rounded-0 border-dark border-opacity-50"
                />
              </div>
            </div>
            <div className="col w-100 mt-4 mt-xl-5 text-center">
              <button
                onClick={handleSubmit}
                className="btn btn-lg btn-outline-primary rounded-0"
                // type="submit"
              >
                Submit
              </button>
            </div>

            <Table
              responsive
              striped
              bordered
              hover
              className="text-center text-nowrap mt-4"
            >
              <thead className="fs-5">
                <tr>
                  <th className="bg-primary text-white">Name</th>
                  {/* <th className="bg-primary text-white">Email</th> */}
                  <th className="bg-primary text-white">Phone Number</th>
                  <th className="bg-primary text-white">SIN</th>
                  <th className="bg-primary text-white">Date</th>
                  <th className="bg-primary text-white">GMP/WHIMS</th>
                </tr>
              </thead>
              <tbody>
                {currentRecords?.map((employee, index) => (
                  <tr key={index}>
                    <td className="text-capitalize">
                      {employee.firstName} {employee.lastName}
                    </td>
                    
                    <td>{employee.phoneNumber}</td>
                    <td>{employee.sin}</td>
                    <td>{new Date(employee.saved_date).toUTCString()}</td>
                    <td>
                      <div className="d-flex justify-content-center gap-1">
                        <Link href={`/admin/view?id=${employee?.id}`}>
                          View
                        </Link>
                        <span className="text-primary">|</span>
                        <div>
                        

                          
                        <ReactToPrint
                          trigger={() => (
                            <span 
                            style={{textDecoration: "underline", cursor: "pointer"}}
                            className="text-primary"
                              href="!#"
                              onClick={(e)=>{e.preventDefault()}}>
                              Download
                            </span>
                          )}
                          content={() => componentRef.current}
                        />

                        </div>
                      </div>
                    </td>
                    {
                      <div style={{ display: "none" }}>
                        <CandidateFile
                          data={data1}
                          whmisQuizDataSelected={whimisselecetd}
                          gmpselecetd={gmpselecetd}
                          ref={componentRef}
                          id={employee?.id}
                        />
                      </div>
                    }
                  </tr>
                ))}
              </tbody>
            </Table>

            <Pagination className="justify-content-center">
              {/* <Pagination.First /> */}
              <Pagination.Prev
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              />
              <Pagination.Item active>
                Page {currentPage} of {totalPages}
              </Pagination.Item>
              {/* <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item disabled>{3}</Pagination.Item> */}
              <Pagination.Ellipsis />
              {/* <Pagination.Item>{totalPages}</Pagination.Item> */}
              <Pagination.Next
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              />
              {/* <Pagination.Last /> */}
            </Pagination>
          </Container>
        </section>
      </main>
    </>
  );
};

export default withAuth(AdminDashboardPage);
