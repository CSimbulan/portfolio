import React, { Fragment } from 'react';
import { MDBCol, MDBBtn, MDBIcon } from "mdbreact";

const Project = (props) => {
    return (
        <MDBCol className="container-custom small-padding" xl="6">
            <div className="white-shadow">
                <div className="container-custom banner-header gradient-blue max-width">
                    <h2 className="white-text">{props.title}</h2>
                </div>
                <div className="banner-body max-width">
                    <div className="container-custom ">
                        {props.imageUrl2 ? <>
                            <img
                                className="project-img2"
                                src={props.imageUrl}
                                alt={props.title + "-project-image1"}
                            />
                            <img
                                className="project-img2"
                                src={props.imageUrl2}
                                alt={props.title + "-project-image2"}
                            /></> : <img
                                className="project-img"
                                src={props.imageUrl}
                                alt={props.title + "-project-image"}
                            />}
                    </div>
                    <div className="project-text max-width min-project-height">
                        {props.technologies.map(tech => (<Fragment key={tech}><span className="project-tech">{tech}</span>{" "}</Fragment>))}
                        <br />
                        {props.description}
                    </div>
                    <div className="container-custom project-buttons">
                        <MDBBtn
                            className="indigo darken-4 button-hover"
                            size="sm"
                            href={props.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <MDBIcon icon="external-link-alt" /> View {props.liveBtnLabel}
                        </MDBBtn>
                        <MDBBtn
                            className="indigo darken-4 button-hover"
                            size="sm"
                            href={props.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <MDBIcon fab icon="github" /> GitHub Repo
                            </MDBBtn>
                    </div>
                </div>
            </div>
        </MDBCol>
    );
};

export default Project;