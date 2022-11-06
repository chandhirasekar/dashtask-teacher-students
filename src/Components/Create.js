import React from 'react'
import Topbar from './Topbar'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Create(){
    return(
       <div>
        <Topbar/>
       <Container className="m-5">
      <Row className="justify-content-md-center"> 
        <Col md="auto">
          <Link to='/createteacher'><button>Teacher</button></Link>  
       <Link to='/createstudent'><button>Student</button></Link>
       </Col>
      </Row>
      </Container>

    </div>
    )
        
    
}
export default Create