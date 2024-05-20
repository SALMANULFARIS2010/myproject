import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import Webheader from './webheader';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Hrsignup() {
  const [record, setRecord] = useState({ fullname: "", email: "", password: "", image2: "" });
  const [errors, setErrors] = useState({});
  const nav = useNavigate();
  const formdata = new FormData();

  // Validation function
  const findErrors = () => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const { fullname, email, password } = record;
    const newErrors = {};
    if (!fullname || fullname === "") {
      newErrors.fullname = "Fullname field is required";
    } else if (fullname.length > 30) {
      newErrors.fullname = "Content is too long";
    }

    if (!email || email === "") {
      newErrors.email = "Email field is required!";
    }

    if (!password || password === "") {
      newErrors.password = "Password field is required!";
    }

    return newErrors;
  };

  const setValue = (field, value) => {
    setRecord({ ...record, [field]: value });
    if (!!errors[field]) {
      setErrors({ ...errors, [field]: null });
    }
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    const newErrors = findErrors();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const url = "http://localhost:8000/hrregister";
      formdata.append("image2", record.image2);
      formdata.append("fullname", record.fullname);
      formdata.append("email", record.email);
      formdata.append("password", record.password);
      axios.post(url, formdata, { headers: { "Content-Type": "multipart/form-data" } }).then((res) => {
        console.log('hi');
        if (res.data.status === 1) {
          nav("/Signin");
        } else {
          toast.error(res.data.msg);
        }
      });
    }
  };

  return (
    <>
      <Webheader />
      <Container style={{
        // border: '1px solid',
        backgroundColor: 'white',
        width: '55%',
        height: '600px',
        marginTop: '20px',
      }}>
        <Row className="h-100">
          <Col>
            <div className="card card-registration my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                    alt="Sample photo" className="img-fluid"
                    style={{ borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem' }} />
                </div>
                <div className="col-xl-6">
                  <div className="card-body p-md-5 text-black">
                    <h3 className="mb-5 text-uppercase">HR Signup</h3>

                    <Form onSubmit={handlerSubmit} encType='multipart/form-data'>
                      <Form.Group>
                        <Form.Label>Fullname</Form.Label>
                        <Form.Control type="text" name="fullname" onChange={(e) => setValue(e.target.name, e.target.value)} isInvalid={!!errors.fullname} />
                        <Form.Control.Feedback type='invalid'>{errors.fullname}</Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" onChange={(e) => setValue(e.target.name, e.target.value)} isInvalid={!!errors.email} />
                        <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" onChange={(e) => setValue(e.target.name, e.target.value)} isInvalid={!!errors.password} />
                        <Form.Control.Feedback type='invalid'>{errors.password}</Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Upload HR ID</Form.Label>
                        <Form.Control type="file" name="image2" onChange={(e) => setValue(e.target.name, e.target.files[0])} />
                      </Form.Group>

                      <Button type="submit">Submit</Button>
                    </Form>
                    <ToastContainer position='top-center' theme='dark' />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
