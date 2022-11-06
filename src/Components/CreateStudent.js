import React from 'react'
import { Link } from 'react-router-dom'
import Topbar from './Topbar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CreateStudent = () => {
  return (
       <div>  <Topbar/>
       <Container className="m-5">
      <Row className="justify-content-md-center"> 
        <Col md="auto">
          <Link to='/createteacher'><button>Teacher</button></Link>  
       <Link to='/createstudent'><button>Student</button></Link>
       </Col>
      </Row>
      </Container>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email ID</Form.Label>
        <Form.Control type="email" placeholder="Email ID" />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicMobile">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="number" placeholder="Mobile" />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicTeacher">
      <Form.Label>Teacher</Form.Label>
        <Form.Select disabled>
          <option>Teacher</option>
        </Form.Select>
        </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form></div>
  )
}

export default CreateStudent