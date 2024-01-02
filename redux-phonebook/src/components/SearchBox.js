import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

export const SearchBox = () => {
  return (
    <Row>
        <Col>
            <Form.Control type='text' placeholder='이름을 입력해주세요.'/>
        </Col>
        <Col>
        <Button>검색</Button>
        </Col>
    </Row>
  )
}
