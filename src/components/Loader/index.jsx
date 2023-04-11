import React from "react";
import "./loader.css";

export default function Loader() {
  return (
    <div className="Loader-Container">
      <img src={require("../../assets/tea.gif")} alt="tea" />
    </div>
  );
}
