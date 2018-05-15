import React from "react";
import students01 from "../images/students01.jpg";
import students02 from "../images/students02.jpg";
import students03 from "../images/students03.jpg";
import students04 from "../images/students04.jpg";
// import Hero from "../components/Hero";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";

const Students = () => (
  <div>
      <div className="container">
      <h1>Our Students</h1>
        <div className="row">
          <img src={students01} alt="students01" height="450"/>
        <div className="row">
          <p>Our students come from all over Gokana Local Government area and are between the ages of 14 through 19. They are each affiliated with one of the following secondary schools:</p>
          <ul>
            <li>Community Secondary School Bera</li>
            <li>Community Secondary School Biara</li>
            <li>Bodo City Girls School</li>
            <li>Apostolic Community Secondary School Deeyor</li>
          </ul>
          <ul>
            <li>Government Secondary School Kpor</li>
            <li>Community Secondary School Mogho</li>
            <li>Community Secondary School Nweol</li>
            <li>St Pius Boys School, Bodo City</li>
          </ul>
        </div>
        <div className="row">
          <img src={students02} alt="students02" height="450"/>
        </div>
        <div className="row">
          <p>Being part of PAN takes a lot of time effort and dedication. Students must attend monthly training meetings, spend many hours in preparation to deliver lessons to their peers and attend and organize other community activities for the continuous improvement of their knowledge.</p>
          <p>PAN students are active leaders in their schools, churches and communities apart from their PAN responsibilities. We recruit only students who exhibit a desire to know Christ more and walk deeper in their Christian faith a per their profession as well as recommendations from teachers, principals and sometimes peers.</p>
        </div>
        <div className="row">
          <img src={students03} alt="students03" height="450"/>
        </div>
        <div className="row">
          <p>Our students play different roles in PAN. Some focus on promoting our mission through social media, others mentor newer student assistants, and still others organize community service events. All of the students get ample training and opportunity to practice and improve on their teaching skills. All students also receive training by hospital workers about the facts of HIV as pertains to their immediate community.</p>
        </div>
        <div className="row">
          <img src={students04} alt="students04" height="450"/>
        </div>
        <div className="row">
          <p>"PAN's aim is to nurture Christian leaders for Ogoni's future and so we strive to provide as many opportunities as possible for such practice."</p>
        </div>
        </div>
      </div>
      
  </div>
);

export default Students;