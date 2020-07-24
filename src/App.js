import React, { useState } from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import Content from './Content/content';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Style CSS
import './css/style.css';

const Link = (props) => 
{
  return <a href={props.http == true ? "http://" + props.href : "" + props.href }>{props.text}</a>
}

// Main
function Main()
{

  return(

    <React.Fragment>
      <div id="content-wrapper" >
        <div id="home"></div>

        <header className="navbar-color sticky-top"> 
          {Header_()}
        </header>


        <main data-spy="scroll" data-target="#main-navbar" data-offset="0 ">
          <Content/>
        </main>

        <footer className="mt-4" style={{}}>
          {Footer_()}
        </footer>
      </div>
    </React.Fragment>

    );

}


// Header
function Header_()
{

  const [isOpen, setOpen] = useState(false);
  const toggle = () => setOpen( !isOpen );

  return(
    <Container>
      <Navbar light expand="md" id="main-navbar">
        <NavbarBrand href="/" className="our-font">
          Logo
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-sm-auto navbar-menu" navbar>
            <NavItem>
              <NavLink href="#home" className="navlink">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about" className="navlink">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#product" className="navlink">
                Product
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact" className="navlink">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );

}

// Footer
function Footer_()
{
  return(

    <div className="text-center">
      <p>Copyright &copy; 2020 All rights reserved.</p>
      <b>Made With <span style={{color: "#ff4343"}} className="fas fa-heart"></span> By <Link href="github.com/Eznic" http={true} text="Eznic"  /></b>
    </div>

  );
}



export default Main;
