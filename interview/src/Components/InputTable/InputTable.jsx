import React, { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";

const InputTable = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const onSubmit = () => {
    console.log("=========>");
    const obj = { name: name, phone: phone, email: email, status: status };
    localStorage.setItem("person", JSON.stringify(obj));
    console.log(obj);
  };
  const onCancel = () => {
    console.log("Cancel");
  };
  return (
    <React.Fragment>
      <Row>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={1}>
              Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={1}>
              Mobile
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="number"
                placeholder="Mobile Number"
                maxLength={10}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={1}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
          </Form.Group>

          <fieldset>
            <Form.Group
              as={Row}
              className="mb-3"
              onChange={(e) => setStatus(e.target.value)}
            >
              <Form.Label as="legend" column sm={1}>
                Status
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="In-progress"
                  value="In-progress"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  type="radio"
                  label="On-hold"
                  value="On-hold"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
                <Form.Check
                  type="radio"
                  label="Done"
                  value="Done"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                />
              </Col>
            </Form.Group>
          </fieldset>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 1, offset: 1 }}>
              <Button onClick={onSubmit}>SAVE</Button>
            </Col>
            <Col sm={{ span: 1, offset: 0 }}>
              <Button onClick={onCancel}>CANCEL</Button>
            </Col>
          </Form.Group>
        </Form>
      </Row>
    </React.Fragment>
    // <div>
    //   <div>
    //     <label>Name:&nbsp;&nbsp;</label>
    //     <input type="text" />
    //   </div>
    //   <div>
    //     <label>Phone:&nbsp;&nbsp;</label>
    //     <input type="text" />
    //   </div>
    //   <div>
    //     <label>Status:&nbsp;&nbsp;</label>
    //     <input type="radio" />
    //     &nbsp;In-progress &nbsp;&nbsp;
    //     <input type="radio" />
    //     &nbsp;Done
    //   </div>
    //   <div>
    //     <button>Save</button>
    //     <button>Cancel</button>
    //   </div>
    //   <br />
    //   <br />
    //   <br />
    //   <table></table>
    // </div>
  );
};

export default InputTable;
