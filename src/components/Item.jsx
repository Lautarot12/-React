import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Item = ({product})=> {
    return (
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.img}/>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
            ${product.price}
        </Card.Text>
        <Button variant="primary">Ver mas</Button>
      </Card.Body>
    </Card>
    )
}

export default Item