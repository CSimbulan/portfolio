import React from 'react';
import { MDBCol } from 'mdbreact';

const ProjectsHeader = () => {
    return (
        <div className="mini-section container-custom full-vw-width">
            <MDBCol className="container-custom small-padding" lg="12">
                <div className="white-shadow">
                    <div className="container-custom banner-header gradient-blue max-width">
                        <h2 className="white-text projects">Projects</h2>
                    </div>
                    <div className="container-custom banner-body max-width">
                        <span className="span-text">
                            Hello and welcome to my site! I am self taught programmer looking for opportunities to push my boundaries and grow alongside a team.
                            I'm always excited to learn new technologies. Check out some of my projects below!
                    </span>
                    </div>
                </div>
            </MDBCol>
        </div>
    )
}
export default ProjectsHeader;