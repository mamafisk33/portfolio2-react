import React, { Component, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const SetAppt = (props) => {
  /* thanks to for reactrap button dropdown example:
  https://reactstrap.github.io/components/button-dropdown/ */

  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>Appointment Time</DropdownToggle>
      <DropdownMenu>
        <DropdownItem>7:00 AM</DropdownItem>
        <DropdownItem>7:15 AM</DropdownItem>
        <DropdownItem>7:30 AM</DropdownItem>
        <DropdownItem>7:45 AM</DropdownItem>
        <DropdownItem>8:00 AM</DropdownItem>
        <DropdownItem>8:15 AM</DropdownItem>
        <DropdownItem>8:30 AM</DropdownItem>
        <DropdownItem>8:45 AM</DropdownItem>
        <DropdownItem>9:00 AM</DropdownItem>
        <DropdownItem>9:15 AM</DropdownItem>
        <DropdownItem>9:30 AM</DropdownItem>
        <DropdownItem>9:45 AM</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
};

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isModalLoginOpen: false,
      isModalBookOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModalLogin = this.toggleModalLogin.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.toggleModalBook = this.toggleModalBook.bind(this);
    this.handleBook = this.handleBook.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModalLogin() {
    this.setState({
      isModalLoginOpen: !this.state.isModalLoginOpen,
    });
  }

  handleLogin(event) {
    alert(
      `Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`
    );
    this.toggleModalLogin();
    event.preventDefault();
  }

  toggleModalBook() {
    this.setState({
      isModalBookOpen: !this.state.isModalBookOpen,
    });
  }

  handleBook(event) {
    alert(
      `Date: ${this.date.value} consultTrain: ${this.consultTrain.value} consultNutrition: ${this.consultNutrition.value} Password: ${this.password.value} Remember Me: ${this.remember.value})`
    );
    this.toggleModalBook();
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1 id="idHomeLogo">
                  {" "}
                  IRON AND <br />
                  MORTAR
                </h1>
              </div>
              <div className="col-lg-2 col-xl-2 offset-lg-4">
                <Button
                  onClick={this.toggleModalBook}
                  className="btn btn-light mt-4"
                  id="bookButton">
                  Book a Consultation
                </Button>
              </div>
              <div className="col-lg-2 col-xl-2">
                <Button className="btn btn-light mt-4" id="dropInButton">
                  Wanna Drop In?
                </Button>
              </div>
            </div>
          </div>
        </Jumbotron>
        <Navbar dark sticky="top" expand="md">
          <div className="container">
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="/assets/images/favicon.ico"
                height="30"
                width="30"
                alt="Iron and Mortar Logo"
              />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <i className="fa fa-home fa-lg" /> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <i className="fa fa-info fa-lg" /> About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <i className="fa fa-list fa-lg" /> Classes
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <i className="fa fa-address-card fa-lg" /> Contact Us
                  </NavLink>
                </NavItem>
              </Nav>
              <span className="navbar-text ml-auto">
                <Button outline onClick={this.toggleModalLogin}>
                  <i className="fa fa-sign-in fa-lg" /> Login
                </Button>
              </span>
            </Collapse>
          </div>
        </Navbar>

        {/* login modal start */}
        <Modal id="loginModal" isOpen={this.state.isModalLoginOpen} toggle={this.toggleModalLogin}>
          <ModalHeader toggle={this.toggleModalLogin}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  innerRef={(input) => (this.username = input)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  innerRef={(input) => (this.password = input)}
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="remember"
                    innerRef={(input) => (this.remember = input)}
                  />
                  Remember me
                </Label>
              </FormGroup>
              <Button type="submit" value="submit" color="primary">
                Login
              </Button>
            </Form>
          </ModalBody>
        </Modal>
        {/* login modal end */}

        {/* book consult modal start */}
        <Modal id="bookModal" isOpen={this.state.isModalBookOpen} toggle={this.toggleModalBook}>
          <ModalHeader toggle={this.toggleModalBook}>Book a Free 1/2-Hour Consultation</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleBook}>
              <FormGroup>
                <Label htmlFor="date" className="ccol-form-label">
                  Date
                </Label>
                <div>
                  <Input
                    type="date"
                    id="date"
                    name="bookDate"
                    placeholder="mm/dd/yyyy"
                    innerRef={(input) => (this.date = input)}
                  />
                </div>
              </FormGroup>
              <SetAppt />
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="consultTrain"
                    innerRef={(input) => (this.consultTrain = input)}
                  />
                  Train
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="consultNutrition"
                    innerRef={(input) => (this.consultNutrition = input)}
                  />
                  Nutrition
                </Label>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  innerRef={(input) => (this.password = input)}
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="remember"
                    innerRef={(input) => (this.remember = input)}
                  />
                  Remember me
                </Label>
              </FormGroup>
              <div className="text-left ml-3">
                <Button type="submit" value="submit" color="primary" className="btn btn-sm">
                  Book Me
                </Button>
              </div>
            </Form>
          </ModalBody>
        </Modal>
        {/* book consult modal end */}
      </React.Fragment>
    );
  }
}

export default Header;
