import React from "react";
import Alert from "react-bootstrap/Alert";

const AlertBanner = ({ message, variant }) => {
  const alertMsg = message || "An expected error";
  const alertVariant = variant || "danger";
  return (
    <Alert variant={alertVariant} style={{ backgroundColor: "red" }}>
      {alertMsg}
    </Alert>
  );
};

export default AlertBanner;
