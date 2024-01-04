import React, { useEffect, useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { productAction } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
//json server 이용 https://www.npmjs.com/package/json-server
//json-server 실행명령어 json-server --watch db.json --port 3004
export const ProductAll = () => {
  const productList = useSelector((state) => state.product.productList);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();
  const getProducts = async () => {
    const searchQuery = query.get('q') || '';
    dispatch(productAction.getProducts(searchQuery));
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div className='body-container'>
      <Container className='item-list-wrap'>
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
