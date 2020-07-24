import React from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';

import promotion from "../img/promotion.png";


const list = () =>{
    
    return(

        <Row>

            <Col md="6" className="mb-5 mt-3 hero text-center">
                <img src={promotion} className="img-fluid"/>
            </Col>

            <Col md="6" className="mt-4  mb-3">
                <div className="Tulisan">
                    <div className="m-auto">
                        
                        <Container fluid={true}>
                            <ul>
                                <li className='promo-list' data-aos="fade-up">
                                    <span className='fas fa-check mr-2' style={{color:"#3498db"}}></span>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </li>
                                <li className='promo-list' data-aos="fade-up">
                                    <span className='fas fa-check mr-2' style={{color:"#3498db"}}></span>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </li>
                                <li className='promo-list' data-aos="fade-up">
                                    <span className='fas fa-check mr-2' style={{color:"#3498db"}}></span>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </li>
                                <li className='promo-list' data-aos="fade-up">
                                    <span className='fas fa-check mr-2' style={{color:"#3498db"}}></span>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </li>
                                <li className='promo-list' data-aos="fade-up">
                                    <span className='fas fa-check mr-2' style={{color:"#3498db"}}></span>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </li>
                                <li className='promo-list' data-aos="fade-up">
                                    <span className='fas fa-check mr-2' style={{color:"#3498db"}}></span>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </li>
                                <li className='promo-list' data-aos="fade-up">
                                    <span className='fas fa-check mr-2' style={{color:"#3498db"}}></span>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </li>
                            </ul>
                        </Container>

                    </div>
                </div>
            </Col>

        </Row>
    );

}

export default list;