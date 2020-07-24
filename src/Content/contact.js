import React from 'react';
import { 
    Container,
    Button,
    Form,
    Input
} from 'reactstrap';

const inputStyle = {
    borderRadius: "25px",
    outline: "none",
    border: "none",
    color: "#666666",
    backgroundColor: "#e6e6e6",
    fontFamily: "Fredoka One",
    display: "block",
    margin: "10px 0"
}

const buttonStyle = {
    padding: "10px 80px",
    borderRadius: "24px",
    fontFamily: 'Fredoka One'
}


const contact = () =>
{
    return(
        <Container fluid={true}>
            <div className="text-center" style={{marginTop: "45px"}}>
                <div className="mt-4">
                    <Form>
                        <Input type="text" className="input-text" style={inputStyle} placeholder="Name" />
                        <Input type="text" className="input-text" style={inputStyle} placeholder="Email" />
                        <Input type="text" className="input-text" style={inputStyle} placeholder="Subject" />
                        <Input type="textarea" className="input-texta" style={inputStyle} placeholder="Message" />
                        <Button color="primary" style={buttonStyle}>Send Email</Button>
                    </Form>
                </div>
            </div>
        </Container>
    );
}

export default contact;