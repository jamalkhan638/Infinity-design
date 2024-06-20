"use client";
import Image from "next/image";
import Link from "next/link";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import FaceookIcon from "../icons/FaceookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import TwitterIcon from "../icons/TwitterIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import NavLink from "../buttons/NavLink";

const socialLinks = [
  {
    href: "https://www.facebook.com",
    icon: <FaceookIcon />,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com",
    icon: <InstagramIcon />,
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com",
    icon: <TwitterIcon />,
    label: "Twitter",
  },
  {
    href: "https://www.linkedin.com",
    icon: <LinkedinIcon />,
    label: "LinkedIn",
  },
];

const HeaderNavbar = () => {
  return (
    <Navbar expand="lg" className="position-absolute top-0 start-0 w-100 z-1">
      <Container fluid="xxl" className="gap-xl-5">
        <Navbar.Brand as={Link} href="/">
          <Image
            width={220}
            height={60}
            src="/assets/images/logo.png"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          style={{ filter: "invert(1)" }}
          aria-controls={`offcanvasNavbar-expand-lg`}
        />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              className="text-white"
              id={`offcanvasNavbarLabel-expand-lg`}
            >
              <Image
                width={150}
                height={40}
                src="/assets/images/logo.png"
                alt="logo"
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="gap-lg-4 gap-xl-5">
            <Nav className="gap-3 mb-3 mb-lg-0 ps-md-4 me-auto">
              <NavLink className="nav-link px-2" as={Link} href="/">
                Home
              </NavLink>
              <NavLink className="nav-link px-2" as={Link} href="/about">
                About us
              </NavLink>
              <NavLink className="nav-link px-2" as={Link} href="/about">
                Contact
              </NavLink>
            </Nav>
            <div className="d-flex align-items-center gap-1 mb-3 mb-lg-0">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link p-1"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <Button variant="outline-light" className="rounded-0">
              Contact Us Today!
            </Button>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default HeaderNavbar;
