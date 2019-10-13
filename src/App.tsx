import React, { Component } from 'react';
import IncomeTaxForm from './components/IncomeTax/IncomeTaxComponent';
import './assets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/react-fontawesome';
import { Navbar, Nav, Modal, Container, Button } from 'react-bootstrap';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AppLayout extends Component {
  state = { showModal: false };

  setModalState = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    return (
      <div className="appBackDrop">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>Income Tax Buddy</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link onClick={this.setModalState}>About the app</Nav.Link>
              <Nav.Link
                eventKey={2}
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Berry-Cool-Inc/IncomeTaxBuddy"
              >
                Out Github <FontAwesomeIcon icon={faGithub} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container className={'incomeTaxDisplayGridTheme'}>
          <h4>Income tax calculator for period 2019-2020</h4>
          <div>
            A very simple web application to calculate applicable income tax. <br />{' '}
            <b>
              Simply input your monthly basic income and age bracket
              <span role="img" aria-label="Skull">
                🙂
              </span>
            </b>
          </div>
          <br />
          <IncomeTaxForm></IncomeTaxForm>
        </Container>
        <Modal size="lg" centered show={this.state.showModal} onHide={this.setModalState} animation={true}>
          <Modal.Header closeButton>
            <Modal.Title>About the app</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              The main aim of this web application itself is to be <b>simple and deadly fast</b> in function and user
              outcome.
            </p>
            <p>
              We may progess this project more to the point where the web application will refresh it's calculation data
              (tax brackets, etc...) for YoY changes
            </p>
            <p>
              This simple side project was meant to be a way to learn new tech-stacks like typescript and react +
              next.js. You can view the source code on Github <br /> <br />{' '}
              <p style={{ textAlign: 'center' }}>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Berry-Cool-Inc/IncomeTaxBuddy">
                  <FontAwesomeIcon icon={faGithub} size="2x" color="#6c757d" />
                </a>
              </p>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.setModalState}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const App: React.FC = () => {
  return <AppLayout />;
};

export default App;
