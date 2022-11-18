import styled from 'styled-components';
import { Navbar, Container, Nav, NavDropdown, CardGroup, Card, Button, Tab, Tabs } from 'react-bootstrap';
function Products() {
    let BtnR = styled.button`
  background : lightblue; color: black; padding: 8px; border: none; width: 
  // Btn변수가 써질때 sbtn이라는 props가 활성화됩니다:
  ${props => props.btnsize}; 
  height: ${props => props.btnsize}; border-radius: 6px; font-weight: ${props => props.btnsize >= '100px' ? 'bold' : 'normal'}`;
    return(
        <div>
            <Navbar className='navbar' bg="light" variant="light" expand='lg'>
        <Container>
          <Navbar.Brand href="#home" className="navlogo">
            <img
              alt="로고"
              src="https://picsum.photos/40/40?random=1"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            FIRST
          </Navbar.Brand>
          <BtnR btnsize="48px">🛒</BtnR>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    )
}
export default Products