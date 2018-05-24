import React from 'react';

const OneApplicant = (props) => (
    <div>
        <h5>Applicant ID: {props.id}</h5> 
        <ul>
            <li> 
                <span>FIRST NAME: </span>{props.first}
            </li>
            <li> 
                <span>LAST NAME: </span>{props.last}
            </li>
            <li> 
                <span>PHOTO LINK: </span>{props.img}
            </li>   
            <li> 
                <span>EMAIL: </span>{props.email}
            </li>
            <li> 
                <span>ROLE: </span>{props.role}
            </li>
            <li> 
                <span>ABOUT ME: </span>{props.about}
            </li>
            <li> 
                <span>ABOUT SCHOOL: </span>{props.aboutSchool}
            </li>
            <li> 
                <span>WHY INTERESTED: </span>{props.why}
            </li>
            <li> 
                <span>TEST SCORE: </span>{props.score}
            </li>
            {/* <li> 
                Date Submitted: {props.date}
            </li> */}
        </ul>
        <br />

    </div>
);

export default OneApplicant;