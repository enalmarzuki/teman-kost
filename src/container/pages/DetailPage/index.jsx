import React from "react";
import Header from "../../../components/molecules/Header";

export default function index(props) {
  console.log(props);
  return (
    <div className="detail-page">
      <Header {...props} />
    </div>
  );
}
