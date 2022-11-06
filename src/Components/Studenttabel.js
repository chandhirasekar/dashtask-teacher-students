import React from 'react'
import { Link } from 'react-router-dom'
import Topbar from './Topbar'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Studenttabel = () => {
  return (
        <div>
           <Topbar/>
       <Container className="m-5">
      <Row className="justify-content-md-center"> 
        <Col md="auto">
          <Link to='/teachertabel'><button>Teacher</button></Link>  
       <Link to='/studenttabel'><button>Student</button></Link>
       </Col>
      </Row>
      </Container>
       <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Teacher.ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Students</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>T-ID-4</td>
          <td>Gopi</td>
          <td>gopi46@gmail.com</td>
          <td>12345</td>
           <td>vicky</td>
           <td>  <Button variant="primary">Edit</Button>
      <Button variant="danger">Delete</Button></td>
        </tr>
        <tr>
          <td>T-ID-3</td>
          <td>Chandhirasekar</td>
          <td>chandhirasekar76@gmail.com</td>
          <td>3456</td>
          <td>chandru</td>
          <td>  <Button variant="primary">Edit</Button>
            <Button variant="danger">Delete</Button></td>
        </tr>
        <tr>
          <td>T-ID-3</td>
          <td>Larry</td>
          <td>Larry@twitter</td>
          <td>45678</td>
          <td>tiny</td>
          <td><Button variant="primary">Edit</Button>
            <Button variant="danger">Delete</Button></td>
        </tr>
      </tbody>
    </Table>
       </div>
  )
}

export default Studenttabel