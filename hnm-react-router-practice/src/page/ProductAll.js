import React, { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
//json server 이용 https://www.npmjs.com/package/json-server
//json-server 실행명령어 json-server --watch db.json --port 3004
export const ProductAll = () => {
  const [productList, setProductList] = useState(null);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    const searchQuery = query.get("q") || "";
    const url = `http://localhost:3004/products?q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log("써치쿼리", searchQuery);
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div className="body-container">
      <Container className="item-list-wrap">
        <Row>
          {productList?.map((item, index) => (
            <Col key={index} lg={3}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
