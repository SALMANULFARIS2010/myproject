import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import AXIOS from 'axios';
import Webheader from './webheader.jsx';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom';
import './signup.css';

export default function SignUp() {
    const [record, setRecord] = useState({ fullname: "", email: "", crs: "", password: "" });
    const [errors, setErrors] = useState({});
    const nav = useNavigate();
    const formdata = new FormData();

    const findErrors = () => {
        const { fullname, email, crs, password } = record;
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = findErrors();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            const url = "http://localhost:8000/register";
            formdata.append("images1", record.images1);
            formdata.append("fullname", record.fullname);
            formdata.append("email", record.email);
            formdata.append("crs", record.crs);
            formdata.append("password", record.password);

            AXIOS.post(url, formdata, { headers: { "Content-Type": "multipart/form-data" } })
                .then((res) => {
                    if (res.data.status === 1) {
                        nav("/Signin");
                    } else {
                        toast.error(res.data.msg);
                    }
                })
                .catch((error) => {
                    console.error("Error:", error);
                    toast.error("An error occurred while submitting the form.");
                });
        }
    };

    return (
        <>
            <Webheader />
            <Container style={{
        //  border: '1px solid',
        backgroundColor: 'white',
        width: '55%',
        height: '500px',
        marginTop: '20px',
      }}>
            <section className="h-100 bg-">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card card-registration my-4">
                                <div className="row g-0">
                                    <div className="col-xl-6 d-none d-xl-block">
                                        {/* Your background image */}
                                        <img src="https://images.pexels.com/photos/7652039/pexels-photo-7652039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            alt="Sample photo" className="img-fluid"
                                            style={{ borderTopLeftRadius: ".25rem", borderBottomLeftRadius: ".25rem" }} />
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="card-body p-md-5 ">
                                            <h3 className="mb-5 text-uppercase">Signup</h3>

                                            <Form onSubmit={handleSubmit} encType='multipart/form-data'>
                                                <Form.Group>
                                                    <Form.Label>Fullname</Form.Label>
                                                    <Form.Control type="text" name="fullname"
                                                        onChange={(e) => setValue(e.target.name, e.target.value)}
                                                        isInvalid={!!errors.fullname} />
                                                    <Form.Control.Feedback type='invalid'>
                                                        {errors.fullname}
                                                    </Form.Control.Feedback>
                                                </Form.Group>

                                                <Form.Group>
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control type="email" name="email"
                                                        onChange={(e) => setValue(e.target.name, e.target.value)}
                                                        isInvalid={!!errors.email} />
                                                    <Form.Control.Feedback type='invalid'>
                                                        {errors.email}
                                                    </Form.Control.Feedback>
                                                </Form.Group>

                                                <Form.Group>
                                                    <Form.Label>Job Role</Form.Label>
                                                    <Form.Control as="select" name="crs"
                                                        onChange={(e) => setValue(e.target.name, e.target.value)}
                                                        isInvalid={!!errors.crs} required>
                                                        <option></option>
                                                        <option>FrontEnd Developer</option>
                                                        <option>BackEnd Developer</option>
                                                        <option>Full stack Developer</option>
                                                        <option>Mern stack Developer</option>
                                                    </Form.Control>
                                                    <Form.Control.Feedback type='invalid'>
                                                        {errors.crs}
                                                    </Form.Control.Feedback>
                                                </Form.Group>

                                                <Form.Group>
                                                    <Form.Label>Password</Form.Label>
                                                    <Form.Control type="password" name="password"
                                                        onChange={(e) => setValue(e.target.name, e.target.value)}
                                                        isInvalid={!!errors.password} />
                                                    <Form.Control.Feedback type='invalid'>
                                                        {errors.password}
                                                    </Form.Control.Feedback>
                                                </Form.Group>

                                                <Form.Group>
                                                    <Form.Label>Upload Employee ID</Form.Label>
                                                    <Form.Control type="file" name="images1"
                                                        onChange={(e) => setValue(e.target.name, e.target.files[0])} />
                                                </Form.Group>

                                                <Button type="submit">Submit</Button>
                                            </Form>

                                            <ToastContainer position='top center' theme='dark' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </Container>
        </>
    );
}