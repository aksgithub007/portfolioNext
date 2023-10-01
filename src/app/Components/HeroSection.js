"use client";
import Image from "next/image";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/app/Components/styles/hero.module.css";
function HeroSection() {
  return (
    <>
      <Container>
        <Row>
          <Col sm={12} md={12} lg={6}>
            <div className={styles.outerWrapper}>
              <span className={styles.subTitle}>Hello</span>
              <h1 className={styles.title}>
                {" "}
                <span>I'm</span> Akshay Shejwal{" "}
              </h1>
              {/* <h1 className="mb-4 title">
              {" "}
              a <span className="typed-text"></span>
              <span className="cursor">&nbsp;</span>
            </h1> */}
              <p className={styles.para}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, excepturi. Distinctio accusantium fugit odit? Fugit
                ipsam. Sed ac fringilla ex. Nam mauris velit, ac cursus quis,
                non leo.
              </p>
              <div className="mt-sm-5 mt-4">
                <a
                  style={{ marginRight: "15px" }}
                  className="btn btn-primary  mr-4"
                  href="contact.html"
                >
                  {" "}
                  Hire Me{" "}
                </a>
                <a className="btn btn-outline-primary ml-3" href="#portfolio">
                  {" "}
                  Portfolio{" "}
                </a>
              </div>
            </div>
          </Col>
          <Col sm={12} md={12} lg={6}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/photo.png"
                alt="myphoto"
                width={600}
                height={600}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HeroSection;
