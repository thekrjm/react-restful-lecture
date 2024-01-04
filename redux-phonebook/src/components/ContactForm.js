import React from 'react'
import {Button, Form} from 'react-bootstrap';
import {useState} from "react"
import { useDispatch } from 'react-redux';

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNum, setPhoneNum] = useState("")
  const dispatch = useDispatch()

  const createContact = (event)=>{
    event.preventDefault()
    dispatch({type:"ADD_CONTACT", payload:{name, phoneNum}})
    setName("")
    setPhoneNum("")
  }

  return (
    <div>
    <Form onSubmit={(event) => createContact(event)} >
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>이름</Form.Label>
        <Form.Control type="text" placeholder="이름을 입력해주세요."  onChange={(event)=>setName(event.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label>전화번호</Form.Label>
        <Form.Control type="number" placeholder="전화번호를 입력해주세요." onChange={(event)=>setPhoneNum(event.target.value)} />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        추가
      </Button>
    </Form>
    </div>
  );
}
export default ContactForm;
