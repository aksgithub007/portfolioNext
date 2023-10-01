"use client";
import Link from "next/link";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "@/app/Components/styles/navbars.module.css";
function Navbars() {
  return (
    <>
      <Navbar expand={"md"} className={` mb-3 pt-3 ${styles.navbarBg}`}>
        <Container>
          <Navbar.Brand href="/" style={{ color: "#fff" }}>
            Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"md"}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${"md"}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${"md"}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"md"}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link className={styles.linkContent} href="/">
                  Home
                </Link>
                <Link className={styles.linkContent} href="/aboutus">
                  About Us
                </Link>
                <Link className={styles.linkContent} href="/skillset">
                  Skill Set
                </Link>
                <Link className={styles.linkContent} href="/projects">
                  Projects
                </Link>
                <Link className={styles.linkContent} href="#action2">
                  Add Projects
                </Link>
                <Link className={styles.linkContent} href="/add-details">
                  Add Details
                </Link>
                <Link className={styles.linkContent} href="#action2">
                  Add Home Content
                </Link>
                <Link className={styles.linkContent} href="/login">
                  Login
                </Link>
                <Link className={styles.linkContent} href="#action2">
                  Logout
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;
