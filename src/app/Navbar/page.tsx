"use client";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faHeart , faBell , faGear } from "@fortawesome/free-solid-svg-icons";
import "./page.css";
import Image from "next/image";
export default function Navigationbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <div className="cont border border-2 border-solid border-dark">
        <Navbar.Brand href="/" className="mb-3">
          <Image src="/images/Morent.png" alt="Morent Logo" height={100} width={100} className="ms-5" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="button-postion" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="Form border border-2 border-solid border-dark">
            <Row className="d-flex mt-2">
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search something here"
                  className="mr-sm-2 input"
                />
                <FontAwesomeIcon icon={faMagnifyingGlass} className="magnifying-glass" />
              </Col>
            </Row>
          </Form>
          <div className="icons d-flex ms-5 border border-2 border-solid border-dark">
          <FontAwesomeIcon icon={faHeart} className="heart mx-5"/>
          <FontAwesomeIcon icon={faBell} className="bell mx-5"/>
          <FontAwesomeIcon icon={faGear} className="gear mx-5"/>
          </div>
          <div className="border border-2 border-solid border-dark">
            <Image src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" width={50} height={50} className="rounded-pill porfile-image"/>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
