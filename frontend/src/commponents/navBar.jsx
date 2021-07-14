import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";

function NavBar(props){

  return (
      <React.Fragment>
        <Navbar className="bg-li" expand>
          <Nav className="ml-0" navbar>
            <NavbarBrand className="brand" href="/home">
              IIITDMJ PORTAL
            </NavbarBrand>
          </Nav>
          <Nav className="ml-auto" navbar>
            {!props.users && (
              <React.Fragment>
                  <button onClick={props.onClose} className="secButton">
                    Log in
                  </button>
                  <button
                    onClick={props.onRegister}
                    className="priButton"
                  >
                    Sign up
                  </button>
              </React.Fragment>
            )}
            {props.users && (
              <React.Fragment>
                  <Link className="nav-link br" to="/user">
                    <span className="fa fa-user-circle-o"></span>{" "}
                    {props.users.name}
                  </Link>
                <div className="or">|</div>
                  <button className="secButton" onClick={props.onLogOut}>
                    <span className="fa fa-sign-out"></span> Sign-out
                  </button>
              </React.Fragment>
            )}
          </Nav>
        </Navbar>
        {/* login part */}
        <Modal isOpen={props.isModal} toggle={props.toggleModal}>
          <ModalHeader toggle={props.toggleModal}>
            <div>
              Login
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={props.onClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </ModalHeader>
          <ModalBody>
            <LoginForm onLogin={props.onLogin} />
          </ModalBody>
        </Modal>
        {/* register part */}
        <Modal isOpen={props.isModal2} toggle={props.toggleModal2}>
          <ModalHeader toggle={props.toggleModal2}>
            <div>
              Register
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={props.onClose2}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </ModalHeader>
          <ModalBody>
            <RegisterForm onRegister={props.onRegister} />
          </ModalBody>
        </Modal>
      </React.Fragment>
    )
}

export default NavBar;
