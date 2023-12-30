import React from "react";
import { useNavigate } from "react-router-dom";

export const AboutPage = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  return (
    <div>
      <div>AboutPage</div>
      <button onClick={goToHome}>집으로</button>
    </div>
  );
};
