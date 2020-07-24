import React,{ Fragment } from 'react';
import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';

// Import All
import Carousel from "./carousel";
import PromoList from "./promo";
import Product from "./product";
import Contact from "./contact";

// Import Image
import hero from "../img/Web.png";
import contact from "../img/contact.png";

const Subtitle = (props) => 
{

    var cName;
    var clr;

    if(props.className == undefined)
    {
        cName = "";
    }
    else
    {
        cName = props.className;
    }

    if(props.color == undefined)
    {
        clr = "black";
    }
    else
    {
        clr = props.color;
    }

    return(
        <h3 style={{color: clr}} className={ cName + " our-font garis-" + clr + " mb-3 text-center"}>{props.text}</h3>
    )
}

function Container_()
{
    const buttonStyle = {
        padding: "10px 80px",
        borderRadius: "24px",
        fontFamily: 'Fredoka One'
    }

    const bgColor = "rgb(106 196 255)";

    return (

        <Fragment>    
            
            <div className="wrap-content">
                <Container>
                    <Row className="c-mt-6">
                        <Col md={{size: 6, order: 2}} className="mb-5 mt-3 hero text-center">
                            <img src={hero} className="img-fluid"/>
                        </Col>
                        <Col md={{size: 6, order: 1}} className="mt-3 mb-3">
                            <div className="Tulisan d-flex align-items-center">
                                <div className="m-auto text-center ">
                                    <h2 className="our-font">
                                        Ayo Buat Websitemu !
                                    </h2>
                                    <Button color="primary" className="mt-3" style={buttonStyle}>Klik Disini !</Button>{' '}
                                </div>
                            </div>
                        </Col>
                        
                    </Row>
                </Container>
            </div>

            {/* Hoo Lee Sheet */}
            <div id="about"></div>
            <div style={{width: "calc(100%)", overflow: "hidden"}}>
                <div className="hrstyle">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{height: "130px",width: "calc(150%)", fill: "white", background: bgColor}} viewBox="0 0 1000 100" preserveAspectRatio="none">	
                        <path className="elementor-shape-fill" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
                    </svg>
                </div>
            </div>

            <div style={{background: bgColor, padding: "0 0 10px 0"}}>
                <Container>

                    <section>

                        <Subtitle text="Tentang Kami" color="white" />

                        <Container>
                            <Row className="mt-4 mb-4">
                            
                                <Col className="mb-4" md={{size: 6, order: 2}}>
                                
                                    <div className="Tulisan text-center d-flex align-items-center">
                                        <h1 style={{margin: "auto", fontSize: "80px"}} className="our-font">Logo</h1>
                                    </div>

                                </Col>

                                <Col className="mt-3 mb-3" md={{size: 6, order: 1}}>

                                   <p style={{fontSize: "19px"}}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ratione cupiditate id maiores, voluptatum delectus, unde voluptatibus, explicabo inventore facilis placeat voluptatem. Incidunt labore quisquam, reiciendis vel distinctio culpa facere!   
                                    </p>                             

                                </Col>
                            
                            
                            </Row>
                        </Container>

                    </section>
                

                </Container>
            </div>

            <div style={{width: "calc(100%)", overflow: "hidden"}}>
                <div className="hrstyle">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{height: "130px",width: "calc(100%)", fill: bgColor, background: "white"}} viewBox="0 0 1000 100" preserveAspectRatio="none">	
                        <path d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
                    </svg>
                </div>
            </div>

            <div>
            <section id="promo" className="mt-4 mb-4">
                    
                    <Container>
                        
                        <Subtitle text="Promo Menarik !"/>
                        
                        {/* List */}
                        <PromoList/>

                    </Container>

                </section>
            </div>

            <div id="product"></div>
            <div>
                <div style={{width: "calc(100%)", overflow: "hidden"}}>    
                    <svg style={{transform: "translateX(-50%) rotateY(180deg)", width: "200%", height: "100px", fill: "white", background: "#33AEFF"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path  d="M0,6V0h1000v100L0,6z"></path>
                    </svg>
                </div>

                {/* Product */}
                <section className="product">
                    
                    <Subtitle text="Produk Kami" color="white" className=""/>

                    <Product/>

                </section>

                <div style={{width: "calc(100%)", overflow: "hidden"}}>    
                    <svg style={{transform: "translateX(-50%) rotateY(180deg)", width: "200%", height: "120px", fill: "#33AEFF", background: "white"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path  d="M0,6V0h1000v100L0,6z"></path>
                    </svg>
                </div>
            </div>
            
            <div id="contact"></div>
            <section className="mt-4 mb-2">
                <Container>
                    <Subtitle text="Hubungi Kami Sekarang !"/>
                    <Row>
                        <Col md={{size: 6, order: 2}} className="mb-5 mt-3 hero text-center">
                            <img src={contact} className="img-fluid"/>
                        </Col>
                        <Col md={{size: 6, order: 1}} className="mt-3 mb-3">
                            <Contact/>  
                        </Col>
                    </Row>
                </Container>
            </section>

        </Fragment>
        
    )
}

export default Container_;