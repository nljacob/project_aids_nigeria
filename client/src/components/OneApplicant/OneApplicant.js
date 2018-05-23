import React from 'react';

const OneApplicant = (props) => (
    <div>
        <h4>Applicant ID: {props.id}</h4> 
        <ul>
            <li> 
                First Name: {props.first}
            </li>
            <li> 
                Last Name: {props.last}
            </li>
            <li> 
                Photo Link: {props.img}
            </li>
            <li> 
                Email: {props.email}
            </li>
            <li> 
                Role: {props.role}
            </li>
            <li> 
                About Me: {props.about}
            </li>
            <li> 
                About School: {props.aboutSchool}
            </li>
            <li> 
                Why Interested: {props.why}
            </li>
            <li> 
                Test Score: {props.score}
            </li>
            {/* <li> 
                Date Submitted: {props.date}
            </li> */}
        </ul>
        <br />

    </div>
);

export default OneApplicant;