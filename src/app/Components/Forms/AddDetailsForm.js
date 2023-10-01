"use client";
import Image from "next/image";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import styles from "@/app/Components/styles/detailsForm.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import bcrypt from "bcryptjs/dist/bcrypt";
import { useRouter } from "next/navigation";

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    address: yup.string().required(),
    company: yup.string().required(),
    exp: yup.string().required(),
    facebook: yup.string().required(),
    twitter: yup.string().required(),
    linkedin: yup.string().required(),
    designation: yup.string().required(),
    bio: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
    cnfpassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    age: yup.number().positive().integer().required(),
    phone: yup
      .number()
      .positive()
      .integer()
      .min(10, "Phone number must be 10 characters!")
      .required(),
  })
  .required();

function AddDetailsForm({ submit }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const router = useRouter();
  const onSubmit = async (data) => {
    const hasPassword = await bcrypt.hash(data.password, 10);
    data.password = hasPassword;
    if (data) {
      // console.log(data);
      const response = await fetch("http://localhost:3000/api/adduser", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });
      if (response.ok) {
        router.push("/");
      }
      // console.log(response);
    }
    reset();
  };
  console.log(errors);
  return (
    <div className={styles.formWrapper}>
      <Container>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <div>
              <Image
                src="/details.svg"
                alt="Add Details"
                width={400}
                height={400}
              />
            </div>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col sm={12} md={6} lg={6}>
                  <Form.Label htmlFor="firstName">First Name</Form.Label>
                  <Form.Control
                    type="text"
                    id="firstName"
                    name="firstName"
                    {...register("firstName", { required: true })}
                  />
                  <p
                    style={{
                      color: "red",
                      fontSize: "15px",
                      fontWeight: "bold",
                      marginBottom: "10px",
                    }}
                  >
                    {errors.firstName?.message}
                  </p>
                </Col>
                <Col sm={12} md={6} lg={6}>
                  <Form.Label htmlFor="lastName">Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    id="lastName"
                    name="lastName"
                    {...register("lastName", { required: true })}
                  />
                  <p
                    style={{
                      color: "red",
                      fontSize: "15px",
                      fontWeight: "bold",
                      marginBottom: "10px",
                    }}
                  >
                    {errors.lastName?.message}
                  </p>
                </Col>
                <Col sm={12} md={6} lg={6}>
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
                <Col sm={12} md={6} lg={6}>
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
                <Col sm={12} md={6} lg={6}>
                  <Form.Label htmlFor="cnfpassword">
                    Confirm Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    id="cnfpassword"
                    name="cnfpassword"
                    {...register("cnfpassword", { required: true })}
                  />
                  <p
                    style={{
                      color: "red",
                      fontSize: "15px",
                      fontWeight: "bold",
                      marginBottom: "10px",
                    }}
                  >
                    {errors.cnfpassword?.message}
                  </p>
                </Col>
                <Col sm={12} md={6} lg={6}>
                  <Form.Label htmlFor="phone">Phone Number</Form.Label>
                  <Form.Control
                    type="number"
                    id="phone"
                    name="phone"
                    {...register("phone", { required: true })}
                  />
                  <p
                    style={{
                      color: "red",
                      fontSize: "15px",
                      fontWeight: "bold",
                      marginBottom: "10px",
                    }}
                  >
                    {errors.phone?.message}
                  </p>
                </Col>
                <Col sm={12} md={6} lg={6}>
                  <Form.Label htmlFor="address">Address</Form.Label>
                  <Form.Control
                    type="text"
                    id="address"
                    name="address"
                    {...register("address", { required: true })}
                  />
                  <p
                    style={{
                      color: "red",
                      fontSize: "15px",
                      fontWeight: "bold",
                      marginBottom: "10px",
                    }}
                  >
                    {errors.address?.message}
                  </p>
                </Col>
                <Col sm={12} md={6} lg={6}>
                  <Form.Label htmlFor="age">Age</Form.Label>
                  <Form.Control
                    type="number"
                    id="age"
                    name="age"
                    {...register("age", { required: true })}
                  />
                  <p
                    style={{
                      color: "red",
                      fontSize: "15px",
                      fontWeight: "bold",
                      marginBottom: "10px",
                    }}
                  >
                    {errors.age?.message}
                  </p>
                </Col>
                <Col sm={12} md={12} lg={12}>
                  <Form.Label htmlFor="bio">About Your Self</Form.Label>
                  <Form.Control
                    type="text"
                    id="bio"
                    name="bio"
                    {...register("bio", { required: true })}
                  />
                  <p
                    style={{
                      color: "red",
                      fontSize: "15px",
                      fontWeight: "bold",
                      marginBottom: "10px",
                    }}
                  >
                    {errors.bio?.message}
                  </p>
                </Col>
                <hr />
                <Col sm={12} md={12} lg={12}>
                  <Form.Label htmlFor="comapny">Current Orgnisation</Form.Label>
                  <Form.Control
                    type="text"
                    id="comapny"
                    name="comapny"
                    {...register("company", { required: true })}
                  />
                  <p
                    style={{
                      color: "red",
                      fontSize: "15px",
                      fontWeight: "bold",
                      marginBottom: "10px",
                    }}
                  >
                    {errors.company?.message}
                  </p>
                </Col>
                <Col sm={12} md={6} lg={6}>
                  <Form.Label htmlFor="exp">Total Experience</Form.Label>
                  <Form.Control
                    type="text"
                    id="exp"
                    name="exp"
                    {...register("exp", { required: true })}
                  />
                  <p
                    style={{
                      color: "red",
                      fontSize: "15px",
                      fontWeight: "bold",
                      marginBottom: "10px",
                    }}
                  >
                    {errors.exp?.message}
                  </p>
                </Col>
                <Col sm={12} md={6} lg={6}>
                  <Form.Label htmlFor="designation">Designation</Form.Label>
                  <Form.Control
                    type="text"
                    id="designation"
                    name="designation"
                    {...register("designation", { required: true })}
                  />
                  <p
                    style={{
                      color: "red",
                      fontSize: "15px",
                      fontWeight: "bold",
                      marginBottom: "10px",
                    }}
                  >
                    {errors.designation?.message}
                  </p>
                </Col>
                <hr />
                <Col sm={12} md={12} lg={12}>
                  <Form.Label htmlFor="facebook">Facebook Link</Form.Label>
                  <Form.Control
                    type="text"
                    id="facebook"
                    name="facebook"
                    {...register("facebook", { required: true })}
                  />
                  <p
                    style={{
                      color: "red",
                      fontSize: "15px",
                      fontWeight: "bold",
                      marginBottom: "10px",
                    }}
                  >
                    {errors.facebook?.message}
                  </p>
                </Col>
                <Col sm={12} md={12} lg={12}>
                  <Form.Label htmlFor="twitter">Twitter Link</Form.Label>
                  <Form.Control
                    type="text"
                    id="twitter"
                    name="twitter"
                    {...register("twitter", { required: true })}
                  />
                  <p
                    style={{
                      color: "red",
                      fontSize: "15px",
                      fontWeight: "bold",
                      marginBottom: "10px",
                    }}
                  >
                    {errors.twitter?.message}
                  </p>
                </Col>
                <Col sm={12} md={12} lg={12}>
                  <Form.Label htmlFor="linkedin">Linkedin Link</Form.Label>
                  <Form.Control
                    type="text"
                    id="linkedin"
                    name="linkedin"
                    {...register("linkedin", { required: true })}
                  />
                  <p
                    style={{
                      color: "red",
                      fontSize: "15px",
                      fontWeight: "bold",
                      marginBottom: "10px",
                    }}
                  >
                    {errors.linkedin?.message}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <div className={styles.aboutSubmitButtonWrapper}>
                    <Button type="submit">Add Details</Button>
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

export default AddDetailsForm;
