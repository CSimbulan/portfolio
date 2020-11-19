import React, { Component } from 'react';
import { MDBCol, MDBBtn } from "mdbreact";

function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

class Contact extends Component {

    state = {
        fname: "",
        lname: "",
        email: "",
        subject: "",
        message: "",
        city: "",
        state: "",
        zip: "",
    };


    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(e.target[3].validity)
        e.target.className += " was-validated";
        const form = e.target;

        if (form[2].validity.valid && form[3].validity.valid && form[4].validity.valid && form[5].validity.valid) {
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({
                    "form-name": form.getAttribute("name"),
                    ...this.state
                })
            })
                .then(() => alert("success"))
                .catch(error => alert(error));
        }

    }

    render() {
        return (
            <div className="mini-section container-custom full-vw-width contact">
                <MDBCol className="container-custom small-padding" lg="6">
                    <div className="white-shadow max-width">
                        <div className="container-custom banner-header gradient-blue max-width">
                            <h2 className="white-text">Contact</h2>
                        </div>
                        <div className="container-custom banner-body max-width">
                            <form
                                className="needs-validation contact-form"
                                noValidate
                                name="contact"
                                onSubmit={this.handleSubmit}
                            ><input type="hidden" name="form-name" value="contact" />
                                <div className="form-group">
                                    <p hidden>
                                        <label>
                                            Don’t fill this out:{" "}
                                            <input name="bot-field" onChange={this.handleChange} />
                                        </label>
                                    </p>
                                </div>
                                <div className="project-text max-width">
                                    If you are interested in working together you can email me directly at <a href="mailto:simbulan.c@gmail.com">simbulan.c@gmail.com</a>,
                                    or you can fill out the contact form below.
                                </div>
                                <br />
                                <div className="form-group">
                                    <label
                                        htmlFor="defaultFormRegisterNameEx"
                                        className="white-text"
                                    >
                                        Name (Required):
                                    </label>
                                    <input
                                        value={this.state.fname}
                                        name="fname"
                                        onChange={this.handleChange}
                                        type="text"
                                        id="defaultFormRegisterNameEx"
                                        className="form-control"
                                        placeholder="Preferred Name"
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Please enter your preferred name.
                                        </div>
                                    <div className="valid-feedback">Looks good!</div>
                                </div>
                                <div className="form-group">
                                    <label
                                        htmlFor="defaultFormRegisterConfirmEx3"
                                        className="white-text"
                                    >
                                        Email (Required):
                                        </label>
                                    <input
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        type="email"
                                        id="defaultFormRegisterConfirmEx3"
                                        className="form-control"
                                        name="email"
                                        required
                                        placeholder="Your Email Address"
                                    />

                                    <div className="invalid-feedback">
                                        Please enter a valid email address.
                                        </div>
                                    <div className="valid-feedback">Looks good!</div>
                                </div>
                                <div className="form-group">
                                    <label
                                        htmlFor="defaultFormRegisterNameEx"
                                        className="white-text"
                                    >
                                        Subject (Required):
                                        </label>
                                    <input
                                        value={this.state.subject}
                                        name="subject"
                                        onChange={this.handleChange}
                                        type="text"
                                        id="defaultFormRegisterNameEx"
                                        className="form-control"

                                        placeholder="Subject"
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Please enter a subject.
                                        </div>
                                    <div className="valid-feedback">Looks good!</div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1" className="white-text">
                                        Message (Required):
                                            </label>
                                    <textarea
                                        value={this.state.message}
                                        className="form-control"
                                        name="message"
                                        id="exampleFormControlTextarea1"
                                        onChange={this.handleChange}
                                        rows="5"
                                        placeholder="Message"
                                        required

                                    />
                                    <div className="invalid-feedback">
                                        Please enter a message.
                                            </div>
                                    <div className="valid-feedback">Looks good!</div>
                                </div>
                                <MDBBtn className="indigo darken-4 button-hover" type="submit" size="sm">
                                    Submit
                                </MDBBtn>
                            </form>
                        </div>
                    </div>
                </MDBCol>
            </div >
        );

    }
}

export default Contact;