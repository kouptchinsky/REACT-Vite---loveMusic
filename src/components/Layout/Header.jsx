import React,{useState,useEffect} from "react";
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from "react-router-dom";

const Header = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);
    let res
    useEffect(() => {
        axios
        .get('https://lovemusic-v1.onrender.com/categories')
        .then((response) => setData(response.data))
        .catch((error) => setError(error))
        .finally(() => setLoaded(true));
    }, []);
    if(!loaded){
        return (
            <Navbar expand="lg" className="bg-body-tertiary">
              <Container>
                <Link to={'/'}>
                  <Navbar.Brand href="/">Love Musics</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Link to={"/gestion"}>
                      <Nav.Link href="/gestion">Gestion</Nav.Link>
                    </Link>
                    <Button variant="primary" disabled>
                        <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        <span className="visually-hidden">Loading...</span>
                    </Button>{' '}
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          )
      }
      else if(error!==""){
        return (
            <Navbar expand="lg" className="bg-body-tertiary">
              <Container>
                <Link to={'/'}>
                  <Navbar.Brand href="/">Love Musics</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Link to={"/gestion"}>
                      <Nav.Link href="/gestion">Gestion</Nav.Link>
                    </Link>
                    <NavDropdown title="ERROR" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">NOTFOUND</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          )
      }
      else{
        res=data.map(items=>
          <Link to={`/${items.id}`} key={items.id}>
            <NavDropdown.Item href={`/${items.id}`}>{items.name}</NavDropdown.Item>
          </Link>
        )
        return (
            <Navbar expand="lg" className="bg-body-tertiary">
              <Container>
                <Link to={'/'}>
                  <Navbar.Brand href="/">Love Musics</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Link to={"/gestion"}>
                      <Nav.Link href="/gestion">Gestion</Nav.Link>
                    </Link>
                    <NavDropdown title="Categories" id="basic-nav-dropdown">
                      {res}
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          )
      }
    }
  

export default Header