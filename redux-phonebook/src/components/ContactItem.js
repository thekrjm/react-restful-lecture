import React from 'react'
import { Col, Row } from 'react-bootstrap'

export const ContactItem = ({item}) => {
  return (
    <Row>
        <Col lg={1}>
            <img width={50} src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png" />
        </Col>
        <Col lg={11} >
            <div>{item.name}</div>
            <div>{item.phoneNum}</div>
        </Col>
    </Row>
  )
}
