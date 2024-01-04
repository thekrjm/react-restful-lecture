import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import './ProductDetail.css';

export const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const getProductDetail = async () => {
    const url = `http://localhost:3004/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Container>
      <Row>
        <Col className='img-wrap'>
          <img src={product?.img} alt='상품이미지' />
        </Col>
        <Col className='item-info'>
          <div>{product?.title}</div>
          <div>￦{product?.price}</div>
          <div
            className={`dropdown ${isOpen ? 'active' : ''}`}
            onClick={toggleDropdown}
          >
            <button className='toggle-btn'>SIZE</button>
            <div className='dropdown-content'>
              {product?.size.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>
          </div>
          <button className='add-item'>추가하기</button>
        </Col>
      </Row>
    </Container>
  );
};
