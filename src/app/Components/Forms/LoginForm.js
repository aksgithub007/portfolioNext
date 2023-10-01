"use client";
import Image from "next/image";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import styles from "@/app/Components/styles/detailsForm.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
  })
  .required();

function LoginForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  console.log(errors);
  return (
    <div className={styles.formWrapper}>
      <Container>
        {/* <Row>
          <Col sm={12}>
            <h2 className={styles.mainTitle}>Login Details</h2>
          </Col>
        </Row> */}
        <Row>
          <Col sm={12} md={6} lg={6}>
            <div>
              <Image src="/login.svg" alt="Login" width={400} height={400} />
            </div>
          </Col>
          <Col sm={12} md={6} lg={6} style={{ marginTop: "80px" }}>
            <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col sm={12} md={12} lg={12}>
                  <Form.Label htmlFor="email">Email</Form.Label>
                  <Form.Control
                    type="email"
                    id="email"
                    name="email"
                    {...register("email", { required: true })}
                  />
                  <p
                    style={{
                      color: "red",
                      fontSize: "15px",
                      fontWeight: "bold",
                      marginBottom: "10px",
                    }}
                  >
                    {errors.email?.message}
                  </p>
                </Col>
                <Col sm={12} md={12} lg={12}>
                  <Form.Label htmlFor="password">Password</Form.Label>
                  <Form.Control
                    type="password"
                    id="password"
                    name="password"
                    {...register("password", { required: true })}
                  />
                  <p
                    style={{
                      color: "red",
                      fontSize: "15px",
                      fontWeight: "bold",
                      marginBottom: "10px",
                    }}
                  >
                    {errors.password?.message}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <div className={styles.aboutSubmitButtonWrapper}>
                    <Button type="submit">Login</Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginForm;
