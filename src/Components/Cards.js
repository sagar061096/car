import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './Card.css'


export default function Cards(props) {
    return (
    

        
        
        <>
        
        
            <Card style={{ width: '25rem' }}>
                <Card.Img variant='bottom' src={props.cards.img} />
                <Card.Body>
                    <Card.Title>{props.cards.title}</Card.Title>
                    <h4>{props.cards.cost}</h4>
                    <h6>{props.cards.features}</h6>
                    
                    <Button variant="primary">Read More..</Button>
                </Card.Body>
            </Card>
            
         </>   
        
    )
}