"use client";
import Image from "next/image";
import React from "react";
import styles from "@/app/Components/styles/about.module.css";
import heroStyles from "@/app/Components/styles/hero.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BiLogoFacebook, BiLogoTwitter, BiLogoLinkedin } from "react-icons/bi";

function HeroAboutUs() {
  return (
    <div className={styles.aboutOuter}>
      <Container>
        <Row>
          <Col sm={12} md={4} lg={4}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/myphoto.jpg"
                alt="about us"
                width={400}
                height={600}
              />
            </div>
          </Col>
          <Col sm={12} md={8} lg={8}>
            <div>
              <h6 className={heroStyles.subTitle}>
                HELLO, I AM Front End Developer
              </h6>
              <h3 className={heroStyles.title}>
                Having O5 Years of Experience
              </h3>
              <p className={heroStyles.para}>
                Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Non quae, fugiat consequatur
                voluptatem nihil ad. Lorem ipsum dolor sit amet.
              </p>
            </div>
            <hr />
            <div>
              <Row>
                <Col sm={12} md={6} lg={6}>
                  <p className={heroStyles.para}>
                    <strong>Name:</strong> Akshay Shejwal
                  </p>
                </Col>
                <Col sm={12} md={6} lg={6}>
                  <p className={heroStyles.para}>
                    <strong>Age:</strong> 32 Years
                  </p>
                </Col>
                <Col sm={12} md={6} lg={6}>
                  <p className={heroStyles.para}>
                    <strong>From:</strong> Karad, Maharashtra
                  </p>
                </Col>
                <Col sm={12} md={6} lg={6}>
                  <p className={heroStyles.para}>
                    <strong>Email:</strong> akshayshejwal@gmail.com
                  </p>
                </Col>
              </Row>
            </div>
            <Col sm={12}>
              <div className={styles.socialWrapper}>
                <div className={styles.buttonWrapper}>
                  <Button>Download CV</Button>
                </div>
                <div className={styles.socialIcon}>
                  <a
                    href="/"
                    className={styles.socialWrap}
                    style={{ marginRight: "15px" }}
                  >
                    <BiLogoFacebook className={styles.icon} />
                  </a>
                  <a
                    href="/"
                    className={styles.socialWrap}
                    style={{ marginRight: "15px" }}
                  >
                    <BiLogoTwitter className={styles.icon} />
                  </a>
                  <a href="/" className={styles.socialWrap}>
                    <BiLogoLinkedin className={styles.icon} />
                  </a>
                </div>
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroAboutUs;
