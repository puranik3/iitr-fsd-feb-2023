import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'

const Menu = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand to="/" as={Link}>
                    <FontAwesomeIcon icon={faBook} className="me-2" />
                    LibraryApp
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link to="/home" as={Link}>Home</Nav.Link>
                        <Nav.Link to="/libraries" as={Link}>Libraries</Nav.Link>
                        <Nav.Link to="/about" as={Link}>About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
 
export default Menu;


/*
<Row key={id} className="my-3">
    <Col xs={6} lg={3}>
        <img src={`${process.env.REACT_APP_API_BASE_URL}${imageUrl}`} 
            alt={name}
            className="w-100"
        />
    </Col>
    <Col xs={6} lg={9}>
        <h5>{name}</h5>
        <div className="my-2 text-sm">{description}</div>
    </Col>
</Row>
*/