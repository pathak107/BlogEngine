import { Navbar, Container, Nav } from 'react-bootstrap'
const Navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">{process.env.NEXT_PUBLIC_BLOG_NAME}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Articles</Nav.Link>
                            <Nav.Link href="#features">Categories</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">About Us</Nav.Link>
                            <Nav.Link href="#deets">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
export default Navigation;