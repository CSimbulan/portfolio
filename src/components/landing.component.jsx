import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

const Landing3 = () => {
    return (
        <div className="full-vw-width container-custom small-padding landing mini-section">
            <div className=" banner-text white-shadow">
                <MDBRow>
                    <MDBCol md="12" lg="4" className="small-padding">
                        <img src="/assets/cs_logo_red.png" alt="Avatar" className="logo" />
                    </MDBCol>
                    <MDBCol md="12" lg="8" className="small-padding container-custom">
                        <h1 className="small-padding">Chris Simbulan</h1>
                        <hr></hr>
                        <h1 className="small-padding">Full Stack Engineer</h1>
                    </MDBCol>
                </MDBRow>
            </div>
        </div>

    )
}

export default Landing3;