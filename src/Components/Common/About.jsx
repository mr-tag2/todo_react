import React, { Fragment } from 'react';

export const About = () => {
    return (
        <Fragment>
            <h2 className="color-with text-center back-header">About</h2>
            <div className="container text-center">
                <div className='card card-body bg-dark'>
                    <h1 className='font-cursive'>Mohammad Taji</h1>
                    <h5 className='font-weight-bold fa fa-check'><span className='ml-2'>Programmer</span></h5>
                    <h5 className='font-weight-bold fa fa-check'><span className='ml-2'>Web Designer</span></h5>
                    <h5 className='font-weight-bold fa fa-check'><span className='ml-2'>Front-End Developer</span></h5>
                </div>
            </div>
        </Fragment>
    );
};
export default About;
