import React from 'react';
import { 
    Card,
    CardBody,
    CardTitle,
    Container,
    Row,
    Col
} from 'reactstrap';

const product = () =>
{
    return(
            <Container>
                <Row>
                    <Col md="4" className="mt-2 mb-2">
                        <Card className="mb-5 mb-lg-0">
                            <CardBody>
                                
                                <CardTitle>
                                    <h5 className="text-muted text-uppercase text-center">Basic</h5>
                                </CardTitle>
                                
                                <h6 className="card-price text-center">$9,99<span class="period">/month</span></h6>
                                <hr/>
                                <ul className="fa-ul">
                                <li>
                                    <span className="fa-li">
                                        <i className="fas fa-check"></i>
                                    </span>
                                    Lorem ipsum dolor sit amet
                                </li>
                                <li>
                                    <span className="fa-li">
                                        <i className="fas fa-check"></i>
                                    </span>
                                    Lorem ipsum dolor sit amet
                                </li>
                                <li>
                                    <span className="fa-li">
                                        <i className="fas fa-check"></i>
                                    </span>
                                    Lorem ipsum dolor sit amet
                                </li>
                                <li>
                                    <span className="fa-li">
                                        <i className="fas fa-check"></i>
                                    </span>
                                    Lorem ipsum dolor sit amet
                                </li>
                                <li className="text-muted">
                                    <span className="fa-li">
                                        <i className="fas fa-times"></i>
                                    </span>
                                    Lorem ipsum dolor sit amet
                                </li>
                                <li className="text-muted">
                                    <span className="fa-li">
                                        <i className="fas fa-times"></i>
                                    </span>
                                    Lorem ipsum dolor sit amet
                                </li>
                                <li className="text-muted">
                                    <span className="fa-li">
                                        <i className="fas fa-times"></i>
                                    </span>
                                    Lorem ipsum dolor sit amet
                                </li>
                                <li className="text-muted">
                                    <span className="fa-li">
                                        <i className="fas fa-times"></i>
                                    </span>
                                    Lorem ipsum dolor sit amet
                                </li>
                                </ul>
                                <a href="#" className="btn btn-block btn-primary text-uppercase">Button</a>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="4" className="mt-2 mb-2">
                        <Card className="mb-5 mb-lg-0">
                            <CardBody>

                                <CardTitle>
                                    <h5 className="text-muted text-uppercase text-center">Premium</h5>
                                </CardTitle>
                                
                                <h6 className="card-price text-center">$14,99<span class="period">/month</span></h6>
                                <hr/>
                                <ul className="fa-ul">
                                <li>
                                    <span className="fa-li">
                                        <i className="fas fa-check"></i>
                                    </span>
                                    Lorem ipsum dolor sit amet
                                </li>
                                <li>
                                    <span className="fa-li">
                                        <i className="fas fa-check"></i>
                                    </span>
                                    Lorem ipsum dolor sit amet
                                </li>
                                <li>
                                    <span className="fa-li">
                                        <i className="fas fa-check"></i>
                                    </span>
                                    Lorem ipsum dolor sit amet
                                </li>
                                <li>
                                    <span className="fa-li">
                                        <i className="fas fa-check"></i>
                                    </span>
                                    Lorem ipsum dolor sit amet
                                </li>
                                <li>
                                    <span className="fa-li">
                                        <i className="fas fa-check"></i>
                                    </span>
                                    Lorem ipsum dolor sit amet
                                </li>
                                <li>
                                    <span className="fa-li">
                                        <i className="fas fa-check"></i>
                                    </span>
                                    Lorem ipsum dolor sit amet
                                </li>
                                <li className="text-muted">
                                    <span className="fa-li">
                                        <i className="fas fa-times"></i>
                                    </span>
                                    Lorem ipsum dolor sit amet
                                </li>
                                <li className="text-muted">
                                    <span className="fa-li">
                                        <i className="fas fa-times"></i>
                                    </span>
                                    Lorem ipsum dolor sit amet
                                </li>
                                </ul>
                                <a href="#" className="btn btn-block btn-primary text-uppercase">Button</a>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="4" className="mt-2 mb-2">
                        <Card className="mb-5 mb-lg-0">
                            <CardBody>

                                <CardTitle>
                                    <h5 className="text-muted text-uppercase text-center">Pro</h5>
                                </CardTitle>
                                
                                <h6 className="card-price text-center">$19,99<span class="period">/month</span></h6>
                                <hr/>
                                <ul className="fa-ul">
                                <li>
                                    <span className="fa-li">
                                        <i className="fas fa-check"></i>
                                    </span>
                                    Lorem ipsum dolor sit amet
                                </li>
                                <li>
                                    <span className="fa-li">
                                        <i className="fas fa-check"></i>
                                    </span>
                                    Lorem ipsum dolor sit amet
                                </li>
                                <li>
                                    <span className="fa-li">
                                        <i className="fas fa-check"></i>
                                    </span>
                                    Lorem ipsum dolor sit amet
                                </li>
                                <li>
                                    <span className="fa-li">
                                        <i className="fas fa-check"></i>
                                    </span>
                                    Lorem ipsum dolor sit amet
                                </li>
                                <li>
                                    <span className="fa-li">
                                        <i className="fas fa-check"></i>
                                    </span>
                                    Lorem ipsum dolor sit amet
                                </li>
                                <li>
                                    <span className="fa-li">
                                        <i className="fas fa-check"></i>
                                    </span>
                                    Lorem ipsum dolor sit amet
                                </li>
                                <li>
                                    <span className="fa-li">
                                        <i className="fas fa-check"></i>
                                    </span>
                                    Lorem ipsum dolor sit amet
                                </li>
                                <li>
                                    <span className="fa-li">
                                        <i className="fas fa-check"></i>
                                    </span>
                                    Lorem ipsum dolor sit amet
                                </li>
                                </ul>
                                <a href="#" className="btn btn-block btn-primary text-uppercase">Button</a>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
    );
}

export default product;