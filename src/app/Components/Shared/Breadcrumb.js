import Link from "next/link";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/app/Components/styles/breadcrumb.module.css";
function Breadcrumb({ title, homeLink }) {
  return (
    <div className={styles.outer}>
      <Container>
        <Row>
          <Col sm={12}>
            <h3 className={styles.title}>{title}</h3>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <div className={styles.outerBreadcrumb}>
              <Link className={styles.active} href="/">
                {homeLink}
              </Link>
              <Link className={styles.breadcrumbLink} href="/aboutus">
                {title}
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Breadcrumb;
