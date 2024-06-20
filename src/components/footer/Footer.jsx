import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-5">
      <Container fluid="xxl">
        <div className="d-flex flex-wrap gap-4">
          <div className="flex-fill">
            <Link href="/">
              <Image
                width={220}
                height={60}
                src="/assets/images/logo.png"
                alt="logo"
              />
            </Link>
            <div className="mt-4 position-relative" style={{ height: "6rem" }}>
              <Image
                priority
                fill
                src="/assets/images/p-logos.png"
                alt="p-logos"
                className="object-fit-contain"
                style={{ objectPosition: "left" }}
              />
            </div>
          </div>
          <div className="flex-fill">
            <h6 className="mb-4 fw-light text-decoration-underline">
              © 2024 INFINITY EMPLOYMENT INC.
            </h6>
            <address className="fw-light">
              1315 Finch Ave W Unit 506 <br /> North York, ON M3J 2G6
            </address>
          </div>
          <div className="flex-fill">
            <a className="d-block mb-1 link-light" href="tel:+4166505959">
              (416) 650-5959
            </a>
            <a
              className="d-block mb-1 link-light"
              href="mailto:info@infinityemployment.ca"
            >
              info@infinityemployment.ca
            </a>

            <div className="mt-3">
              <div className="fw-light">Powered by:</div>
              <a
                className="link-light fw-bold"
                href="https://www.fullcircleagency.ca/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Full Circle Agency Inc.
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
