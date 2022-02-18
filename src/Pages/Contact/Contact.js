import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Navbar1 from '../../Components/Navbars/Navbar1'


function Contact() {
    return (
        <>
            <Container fluid>
                 <Row>
                    <Col>
                    <Navbar1/>
                    </Col>
                </Row> 

                   <br/><br/><br/><br/><br/>
                   <Row>
                   <Col>
                   <div className="container text-center mt-3">
                            <h1 className="">Contact Us</h1>
                        </div>
                        <div className="container contact_div">
                            <div className="row">
                                <div className="col-md-6 col-10 mx-auto">
                                    <form>
                                        <div class="mb-3">
                                            <label For="exampleFormControlInput1" class="form-label">
                                                FullName
                                            </label>
                                            <input type="text"
                                                class="form-control"
                                                id="exampleFormControlInput1"
                                                placeholder="Enter Your Name">
                                            </input>
                                        </div>
                                        <div class="mb-3">
                                            <label For="exampleFormControlInput1" class="form-label">
                                                Phone
                                            </label>
                                            <input type="number"
                                                class="form-control"
                                                id=""
                                                placeholder="Mobile Number">
                                            </input>
                                        </div>
                                        <div class="mb-3">
                                            <label htmlhtmlFor="exampleFormControlInput1" class="form-label">
                                                Email address
                                            </label>
                                            <input type="email"
                                                class="form-control"
                                                id="exampleFormControlInput1"
                                                placeholder="name@example.com">
                                            </input>
                                        </div>
                                        <div class="mb-3">
                                            <label htmlhtmlFor="exampleFormControlTextarea1" class="form-label">
                                                Message
                                            </label>
                                            <textarea class="form-control"
                                                id="exampleFormControlTextarea1"
                                                rows="3">
                                            </textarea>

                                        </div>
                                        <div class="col-12">
                                            <button class="btn btn-outline-primary" type="submit">Submit form</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                   
                   </Col>

                   </Row>
                 


                
            </Container>
        </>
    )
}

export default Contact
