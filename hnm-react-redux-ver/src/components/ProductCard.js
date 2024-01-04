import React from "react";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/products/${item.id}`);
  };
  return (
    <div className="item" onClick={showDetail}>
      <img src={item?.img} alt="상품이미지" />
      <div>{item?.choice === true ? "Conscious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div>{item?.new === true ? "신제품" : ""}</div>
    </div>
  );
};
