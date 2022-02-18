import React from 'react';
import {Container,Row,Col} from "react-bootstrap"
import CardList from '../../Components/CardList.js'


import Navbar1 from '../../Components/Navbars/Navbar1'
import { Slides1 } from '../../Components/Slides';
import img4 from '../../Assets/img/4.jpg'
import img5 from '../../Assets/img/5.jpg'
import img6 from '../../Assets/img/6.jpg'
import img7 from '../../Assets/img/7.jpg'
import img8 from '../../Assets/img/8.jpg'
import img9 from '../../Assets/img/9.jpg'
import Service1 from '../../Components/Service/Service1.js';



function Home() {
    const cardList=[
        {
            id: 1,
            title: "JAGUAR",
            img: img4,
            cost: "$2000",
            features: "AUTOMATIC / SEDAN / DIESEL"
        },
        {
            id: 2,
            title: "MERCEDES",
            img: img5,
            cost: "$4000",
            features: "AUTOMATIC / 2 SEATER / PETROL",
        },
        {
            id: 3,
            title: "BMW",
            img: img6,
            cost: "$6000",
            features: "AUTOMATIC / SEDAN / PETROL & DIESEL"
        },
        {
            id: 4,
            title: "AUDI R8",
            img: img7,
            cost: "$8000",
            features: "AUTOMATIC / 2 SEATER / PETROL"
        },
        {
            id: 5,
            title: "ASTON MARTIN",
            img: img8,
            cost: "$10000",
            features: "MANUAL / SEDAN / PETROL"
        },
        {
            id: 6,
            title: "RANGE ROVER",
            img: img9,
            cost: "$12000",
            features: "AUTOMATIC / SUV / PETROL "
        }   
    ]
  return(
      <>
      <Container fluid>
          <Row>
              <Col>
              <Navbar1/>
              </Col>
          </Row>
         <br/>

          <Row>
              <Col>
              <Slides1/>
              </Col>
          </Row>
          <br/>
          
          <Row>
              <Col>
              <Container>
              <h1 className='text-center'>Latest Product</h1>  
              <main className='row'>
              <CardList cardList={cardList}/>
              </main>
              </Container>
              </Col>
          </Row>
          <br/>
          <Row>
              <Col>
              <Service1/>
              </Col>
          </Row>
         <br/>
    

      </Container>
      </>
  )
}

export default Home;
