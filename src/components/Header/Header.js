import React, { useContext } from 'react';
import "./Header.css"
import { Navbar,Nav,Form,FormControl,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] =useContext(UserContext)
    return (
        <div >
            <div className="header-style">
                <img src="data:image/png;base64,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" alt=""/>
            <h1 >Rides</h1>
            </div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home"><Link to="/home">Home</Link></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home"> <Link to="/destination/3">Destination</Link></Nav.Link>
                    <Nav.Link href="#features">Blog</Nav.Link>
                    <Nav.Link href="#pricing">Contact</Nav.Link>
                    
                    <Button variant="outline-info"> <Link to="/login">Login</Link></Button>
                    <br/>
                    
                    <Nav.Link href=""> <strong style={{color:"skyblue"}}>Login Email: {loggedInUser.email}</strong> </Nav.Link>
                </Nav>
                
                
            </Navbar>


            
        </div>
    );
};

export default Header;