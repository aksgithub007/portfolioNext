import React from "react";
import AddDetailsForm from "../Components/Forms/AddDetailsForm";
import Breadcrumb from "../Components/Shared/Breadcrumb";

function AddDetails() {
  return (
    <>
      <Breadcrumb title={"Add Details"} homeLink={"Home"} />
      <AddDetailsForm />
    </>
  );
}

export default AddDetails;
