import React from "react";
import { Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <React.Fragment>
      <Row></Row>
      <Row style={{height:"100px"}}>
        <Col lg="1"></Col>
        <Col lg="3">
          <div className="photo">
            <img src="photo.jpg" height="100%" alt="" />
          </div>
        </Col>
        <Col lg="7"></Col>
        <Col lg="1"></Col>
      </Row>
    </React.Fragment>
  );
};

export default Header;
