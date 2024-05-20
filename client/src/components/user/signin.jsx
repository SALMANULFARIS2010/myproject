import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import AXIOS from 'axios';
import { useNavigate } from 'react-router-dom';
import './signin.css'
import { Link } from 'react-router-dom';

const Signin = () => {
  const [record, setRecord] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const nav = useNavigate();

  // Validation function
  const findErrors = () => {
    const { email, password } = record;
    const newErrors = {};

    if (!password || password === "") {
      newErrors.password = "Password field is required";
    } else if (password.length > 6) {
      newErrors.password = "Password is too long";
    }

    if (!email || email === '') {
      newErrors.email = "Email field is required!";
    }

    return newErrors;
  }

  const setValue = (field, value) => {
    setRecord({ ...record, [field]: value });
    if (!!errors[field]) {
      setErrors({
        ...errors, [field]: null
      });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = findErrors();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const url = "http://localhost:8000/login";

      AXIOS.post(url, record).then((res) => {
        if (res.data.status == 1) {
          alert(res.data.msg);
          sessionStorage.setItem("fullname", res.data.fullname);
          sessionStorage.setItem("id", res.data.userId);
          sessionStorage.setItem("usertype", res.data.usertype);
          console.log(sessionStorage.getItem("id"));

          if (res.data.usertype === "Employee") {
            nav("/emppage");
          } else if (res.data.usertype === "HR") {
            nav("/hrpage");
          } else {
            console.log("Unknown user type");
          }
        } else {
          alert(res.data.msg);
        }
      });
    }
  };

  return (
    <section className="h-100 gradient-form" style={{ backgroundColor: '#eee' }}>
      <Container className="py-5 h-100">
      <Link to="/home"> {/* Replace "/previous-page" with the actual path you want to link to */}
      <Button variant="outline-dark">BACK</Button>
    </Link>
        <Row className="d-flex justify-content-center align-items-center h-100">
          <Col xl={10}>
            <div className="card rounded-3 text-black">
              <Row className="g-0">
                <Col lg={6}>
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img src="https://uploads.turbologo.com/uploads/design/preview_image/49952502/watermark_preview_image20240404-7-1bv1gie.png"
                        style={{ width: '185px' }} alt="logo" />
                      <h4 className="mt-1 mb-5 pb-1">SIGN IN</h4>
                    </div>
                    <Form onSubmit={handleSubmit}>
                      <p></p>
                      <Form.Group className="form-outline mb-4">
                      <Form.Label className="form-label" htmlFor="form2Example11">Username</Form.Label>
                        <Form.Control
                          type="email"
                          id="form2Example11"
                          className="form-control"
                  
                          placeholder="Email address"
                          name="email"
                          value={record.email}
                          onChange={(e) => setValue('email', e.target.value)}
                        />
                        {/* <Form.Label className="form-label" htmlFor="form2Example11">Username</Form.Label> */}
                      </Form.Group>
                      <Form.Group className="form-outline mb-4">
                      <Form.Label className="form-label" htmlFor="form2Example22">Password</Form.Label>
                        <Form.Control
                          type="password"
                          id="form2Example22"
                          className="form-control"
                          placeholder="Password"
                          name="password"
                          value={record.password}
                          onChange={(e) => setValue('password', e.target.value)}
                        />
                        {/* <Form.Label className="form-label" htmlFor="form2Example22">Password</Form.Label> */}
                      </Form.Group>
                      {/* <div className="text-center pt-1 mb-5 pb-1">
                        <Button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Log in</Button>
                        <a className="text-muted" href="#!">Forgot password?</a>
                      </div> */}
                      <div className="text-center pt-1 mb-5 pb-1">
                      <Button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Log in</Button>
                      <div className="mt-3"> {/* Adding margin-top here */}
                       <a className="text-muted" href="#!">Forgot password?</a>
                         </div>
                            </div>

                      {/* <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <Button type="button" className="btn btn-outline-danger">Create new</Button>
                      </div> */}
                      <div className="d-flex align-items-center justify-content-center pb-4">
  <p className="mb-0 me-2">Don't have an account?</p>
  <Link to="/signup">
    <Button type="button" className="btn btn-outline-danger">Create new</Button>
  </Link>
</div>

                    </Form>
                  </div>
                </Col>
                <Col lg={6} className="d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">We are more than just a company</h4>
                    <p className="small mb-0">"We're not just an IT company; we're innovators, problem solvers, and collaborators. Our passion drives us to create solutions that go beyond technology, transforming ideas into reality and empowering businesses to thrive in a digital world.".</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Signin;
