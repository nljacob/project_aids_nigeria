import React from "react";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
import "./About.css";
import about01 from "../../images/about01.jpg";
import about02 from "../../images/about02.jpg";

const About = () => (
    <div className="about-page">
        <div className="container">
            <div className="row">
                <div className="col text-center">
                <br/>
                <br/>
                <br/>
                <br/>
                    <h3>ABOUT PROJECT AIDS NIGERIA</h3>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <br />
                    <p>In 2007, after thirteen years since my family and I had fled the country as refugees, I revisited Nigeria for the first time. I was initially overjoyed but eventually returned to the States deeply saddened by the dire health conditions of family members and friends. The war my family and I had escaped was over, but sickness had taken its place. Interested in understanding the cause of many of the sicknesses, I visited several hospitals where I spoke with doctors who all concurred that an overwhelming number of patients they saw tested positive for HIV/AIDS.</p>
                    <p>Unable to turn a blind eye to my home and to people who had shaped me as a child, I decided to employ my developing skills in education to help the with the HIV epidemic. I spoke with a mentor at my church, First United Methodist Church Houston, and the missions board was gracious enough to sponsor my second trip in 2009 which enabled me to better understand the nature of the HIV epidemic in southern Nigeria. While there, I conducted an anonymous survey along with interviews at the general hospital in Bori and discovered that many HIV positive people did not know how they acquired the disease, had a strong desire to better understand the disease, and had little to no support from family and friends with whom many of them did not feel safe revealing their HIV positive status. That same summer, I linked with HIV counselors in Ogoni to conduct outreach events at several schools to gauge students’ understanding about HIV, its prevalence and methods of prevention. I found that for many of the students, the information was new, and that’s when I realized that education could be a starting point for warning young people about H3IV.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-8">
                    <p>Since 2009, Project AIDS Nigeria has shared knowledge of HIV with every class of students in five main schools that we’ve partnered with. That’s thousands of students. In 2012, PAN switched its focus from large classroom lectures taught by HIV counselors once or twice a year to smaller, peer to peer groups that meet monthly at the schools. These small groups foster a safer space to deal with the sensitive topics we cover. PAN activities now span eight schools and consist of about thirty Student Assistants who lead cell groups at their respective schools and around the community. Every month, we reach over two hundred students.</p>
                    <p>Because HIV/AIDS is a sexually transmitted disease, we encourage students to abide by God’s design of sex within marriage. PAN’s goal is to create a space for young people where bold faith in the Lord is normal and students can find encouragement in their aims to pursue God’s plan for their lives. However, PAN is clear and direct about the details of HIV and modes of prevention for all students no matter their choices or circumstances. Our other main goal is to foster genuine love in ourselves and in our communities for all people regardless of their HIV status.</p>
                    <p> Over the years, I have found overwhelming support for the dream that my home country would one day be HIV free. I am especially grateful to First United Methodist Church for their continued support. I also thank my friends, Goodnews and Neeha and my family who have donated countless hours to this cause. I’m indebted to my husband Michael supports me like no other. I finally thank our students who do the real work in Nigeria for their courage to speak boldly in hopes of saving their peers and community from disease. I pray that the Lord will continue to give us all strength in our attempt to live believing in his promises and live according to his plan.</p>

                </div>
                <div className="col-4">
                    <img alt="" src= {about01} id="image-about01" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p> Thank you sincerely for your support,
                    <br/>
                    <br/>
                    Domale Dube Keys
                    <br/>
                    Project AIDS Nigeria
                    <br/>
                    Founding Director
                    </p>
                    <br/>
                </div>
            </div>
            <div className="row">
            <div className="col text-center">
            <img alt="" src= {about02} id="image-about02" />
            </div>
            </div>
        </div>
    </div>
);

// const Home = () => (
//     <div>
//         <Container style={{ marginTop: 30 }}>
//             <Row>
//                 <Col size="md-12">
//                     <h1>About Project AIDS Nigeria</h1>
//                 </Col>
//             </Row>
//             <Row>
//                 <Col size="md-12">
//                     <br />
//                     <p>
//                         In 2007, after thirteen years since my family and I had fled the country as refugees, I revisited Nigeria for the first time. I was initially overjoyed but eventually returned to the States deeply saddened by the dire health conditions of family members and friends. The war my family and I had escaped was over, but sickness had taken its place. Interested in understanding the cause of many of the sicknesses, I visited several hospitals where I spoke with doctors who all concurred that an overwhelming number of patients they saw tested positive for HIV/AIDS.
//                         <br /> <br />
//                         Unable to turn a blind eye to my home and to people who had shaped me as a child, I decided to employ my developing skills in education to help the with the HIV epidemic. I spoke with a mentor at my church, First United Methodist Church Houston, and the missions board was gracious enough to sponsor my second trip in 2009 which enabled me to better understand the nature of the HIV epidemic in southern Nigeria. While there, I conducted an anonymous survey along with interviews at the general hospital in Bori and discovered that many HIV positive people did not know how they acquired the disease, had a strong desire to better understand the disease, and had little to no support from family and friends with whom many of them did not feel safe revealing their HIV positive status. That same summer, I linked with HIV counselors in Ogoni to conduct outreach events at several schools to gauge students’ understanding about HIV, its prevalence and methods of prevention. I found that for many of the students, the information was new, and that’s when I realized that education could be a starting point for warning young people about H3IV.
//             </p>
//                 </Col>
//             </Row>
//             <Row>
//                 <Col size="md-6">
//                     <br />
//                     <p>Since 2009, Project AIDS Nigeria has shared knowledge of HIV with every class of students in five main schools that we’ve partnered with. That’s thousands of students. In 2012, PAN switched its focus from large classroom lectures taught by HIV counselors once or twice a year to smaller, peer to peer groups that meet monthly at the schools. These small groups foster a safer space to deal with the sensitive topics we cover. PAN activities now span eight schools and consist of about thirty Student Assistants who lead cell groups at their respective schools and around the community. Every month, we reach over two hundred students.
//                     <br /> <br />
//                         Because HIV/AIDS is a sexually transmitted disease, we encourage students to abide by God’s design of sex within marriage. PAN’s goal is to create a space for young people where bold faith in the Lord is normal and students can find encouragement in their aims to pursue God’s plan for their lives. However, PAN is clear and direct about the details of HIV and modes of prevention for all students no matter their choices or circumstances. Our other main goal is to foster genuine love in ourselves and in our communities for all people regardless of their HIV status.
//                     </p>
//                 </Col>
//                 <Col size="md-6">
//                     <br />
//                     <img src="http://www.projectaidsnigeria.org/uploads/4/2/3/0/42309013/4016817.jpg?355" alt="Smiley face" height="450" width="450" />
//                 </Col>
//             </Row>
//             <br />
//             <Row>
//                 <Col size="md-12">
//                     <p> Over the years, I have found overwhelming support for the dream that my home country would one day be HIV free. I am especially grateful to First United Methodist Church for their continued support. I also thank my friends, Goodnews and Neeha and my family who have donated countless hours to this cause. I’m indebted to my husband Michael supports me like no other. I finally thank our students who do the real work in Nigeria for their courage to speak boldly in hopes of saving their peers and community from disease. I pray that the Lord will continue to give us all strength in our attempt to live believing in his promises and live according to his plan.
//                     <br/>
//                     <br/>
//                     Thank you for sincerely your support,
//                     <br/>
//                     <br/>
//                     Domale Dube Keys
//                     <br/>
//                     Project AIDS Nigeria
//                     <br/>
//                     Founding Director
//                     </p>
//                 </Col>
//             </Row>
//         </Container>
//     </div>
// );

export default About;
