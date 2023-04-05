import React from "react";
import NavigateHeader from "../components/NavigateHeader/NavigateHeader";
import ContainerForm from "../components/ContainerForm/ContainerForm";
import CallToBook from "../components/CallToBook/CallToBook";
import Footer from "../components/Footer/Footer";

const Contact = () => {
  return (
    <div>
      {" "}
      <NavigateHeader text={"Contact"} />
      <ContainerForm />
      <CallToBook />
      <Footer />
    </div>
  );
};

export default Contact;
