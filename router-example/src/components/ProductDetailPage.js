import React from "react";
import { useParams } from "react-router-dom";

export const ProductDetailPage = () => {
  const params = useParams();
  console.log("params", params);
  console.log("wwwwwwwww");
  return (
    <div>
      <h1>ProductDetailPage</h1>
      <h2>{params.id}</h2>
    </div>
  );
};
