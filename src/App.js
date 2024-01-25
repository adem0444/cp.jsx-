import React from 'react'
import Button from 'react-bootstrap/Button';
import Name from './Name';
import Description from './Description.js';
import Price from './Price';
import Image from './Image';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import product from './product';

const App = () => {
  const firstName= "adem"
  
  return (
    <div>
      
 <p>{firstName ? `Hello, ${firstName}` : "Hello There !"} </p>

 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Name/>
        <Price/>
        <Description/>
      </Card.Body>
    </Card>
    
    </div>
  
  )
}

export default App
