import Banner from "@/components/ui/Banner";
import React from "react";
import { Container, Table } from "react-bootstrap";

const TablePage = () => {
  // Define the employee data array
  const employeeData = [
    {
      first_name: "testing",
      last_name: "One",
      email: "testingOne@gmail.com",
      phone_number: "03245505265",
      sin: "213123",
    },
    {
      first_name: "testing",
      last_name: "One",
      email: "testingOne@gmail.com",
      phone_number: "03245505265",
      sin: "213123",
    },
    {
      first_name: "testing",
      last_name: "One",
      email: "testingOne@gmail.com",
      phone_number: "03245505265",
      sin: "213123",
    },
    {
      first_name: "testing",
      last_name: "One",
      email: "testingOne@gmail.com",
      phone_number: "03245505265",
      sin: "213123",
    },
    // Add more employees as needed
  ];

  return (
    <main>
      <Banner />
      <section className="py-5">
        <Container fluid="xxl">
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th className="bg-primary text-white">#</th>
                <th className="bg-primary text-white">First Name</th>
                <th className="bg-primary text-white">Last Name</th>
                <th className="bg-primary text-white">Email</th>
                <th className="bg-primary text-white">Phone Number</th>
                <th className="bg-primary text-white">SIN</th>
              </tr>
            </thead>
            <tbody>
              {employeeData.map((employee, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td className="text-capitalize">{employee.first_name}</td>
                  <td className="text-capitalize">{employee.last_name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.phone_number}</td>
                  <td>{employee.sin}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </section>
    </main>
  );
};

export default TablePage;
