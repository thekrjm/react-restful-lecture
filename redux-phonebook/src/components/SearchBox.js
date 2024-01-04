import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux';

export const SearchBox = () => {
  let [localKeyword, setLocalKeyword] = useState("");
  let dispatch = useDispatch();
  const searchByName = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword: localKeyword } });
  };
  console.log(localKeyword);
  return (
    <Form onSubmit={searchByName} className="search-form">
    <Row>
        <Col>
            <Form.Control             
            type="text"
            placeholder="name"
            onChange={(event) => setLocalKeyword(event.target.value)}/>
        </Col>
        <Col>
        <Button>검색</Button>
        </Col>
    </Row>
    </Form>
  )
}
