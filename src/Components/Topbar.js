import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Topbar = () => {
  return (
    <div>
  
       
        
       <Navbar bg="warning" variant="warning">
        <Container>
          <Navbar.Brand href="#home">Teacher&Student Management</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" > <Link to='/view' style={{textDecoration:'none',color:'white'}}>View</Link></Nav.Link>
            <Nav.Link href="#features"><Link to='/create' style={{textDecoration:'none',color:'white'}}>Create</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Topbar