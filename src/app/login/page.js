import React from "react";
import LoginForm from "../Components/Forms/LoginForm";
import Breadcrumb from "../Components/Shared/Breadcrumb";

function Login() {
  return (
    <>
      <Breadcrumb title={"Login"} homeLink={"Home"} />
      <LoginForm />
    </>
  );
}

export default Login;
