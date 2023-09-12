import React from "react";
import { Spinner } from "react-bootstrap";

function Loading() {
  return (
    <div
      style={{
        marginTop: "200px",
      }}
      className="text-center"
    >
      <Spinner
        style={{
          width: "80px",
          height: "80px",
        }}
        animation="border"
        variant="primary"
      />
    </div>
  );
}

export default Loading;
