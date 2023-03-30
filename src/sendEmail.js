import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, {useRef, useState} from "react";
import Button from 'react-bootstrap/Button';
import emailjs, { init } from "@emailjs/browser";

const SendEmail = ({userEmail, usersEmails, contactForm, setContactForm})=>{
    const publicKey ='lF7RZopqxlX9YNUDX'
    const contactServis = 'service_0k0gqak'
    const [message, setMessage] = useState('')

    const handleMessageEnter = (event)=> {
        let msg =''
        event.target.type ==='text' ?  msg = event.target.value : msg = ''
        setMessage(msg)
        console.log(message)
    }

    const handleSendEmail = (event)=> {
        emailjs.init(publicKey)
        let new_form = {
            name:'',
            email:'',
            message:'',
        }
        contactForm.map(contact=>(
            new_form.name=contact.name, new_form.email=contact.email, new_form.message=message
        ))
        emailjs.send(contactServis, new_form)
            .then(function() {
                        console.log('SUCCESS!');
                    }, function(error) {
                        console.log('FAILED...', error);
                    })

    }



  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email From
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue={userEmail}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
         Message
        </Form.Label>
        <Col sm="10">
          <Form.Control onChange={handleMessageEnter} type="msg" placeholder="Enter A Message To Send" />
        </Col>
          <Button onClick={handleSendEmail} style={{width:'100px', marginLeft:'200px', marginTop:'10px'}} variant="primary"> Send</Button>
      </Form.Group>
    </Form>
  );
}

export default SendEmail;