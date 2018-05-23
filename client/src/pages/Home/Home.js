import React from "react";
import SplashPage from "../../components/SplashPage";
import "./Home.css";
import handimagegray from "../../images/handimagegray.png";
import home01 from "../../images/home01.png";
import home02 from "../../images/home02.jpg";
import home03 from "../../images/home03.jpg";
import home04 from "../../images/home04.jpg";
import statimg01 from "../../images/statimg01.png";
import statimg02 from "../../images/statimg02.png";
import statimg03 from "../../images/statimg03.png";
// import HomeCSS from "Home.css";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";


const Home = () => (
  <div className="home-page">
    <SplashPage backgroundImage={handimagegray} >
      <h1>Project AIDS Nigeria</h1>
      <h2>For Love and Knowledge</h2>
    </SplashPage>
    <br/>
    <br/>
    <div className="container">
    <div className="row">
      <div className="col-3 mx-auto">
      <div className="">
        <img alt="" src= {statimg01} id="image-statimg01"/>
      </div>  
      </div>  
      <div className="col-3 mx-auto">
      <div className="">
        <img alt="" src= {statimg02} id="image-statimg02"/>
      </div>  
      </div>  
      <div className="col-3 mx-auto">
      <div className="">
        <img alt="" src= {statimg03} id="image-statimg03"/>
      </div>          
      </div>          
    </div>
      
      <div className="row">
        <div className="col">
        <br/>
        <br/>
        <h1 className="paragraph-header">Our Mission</h1>
          <br />
          <p>
            Project AIDS Nigeria is organized exclusively for the charitable and educational purpose of helping rural communities in Nigeria combat the HIV/AIDS epidemic. We achieve this goal by providing education for the prevention of HIV/AIDS through a Christian perspective and by working closely with local hospitals to better serve their HIV/AIDS patients.
            Project AIDS Nigeria (PAN) delivers educational workshops about HIV and other sexually transmitted diseases to prevent new infections and to reduce the stigma associated with HIV.  Project AIDS Nigeria also works closely with local hospitals to help them better serve their HIV/AIDS patients through providing volunteers for certain tasks or aiding with non-medicinal material needs.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <br />
          <img alt="" src= {home01} id="image-home01"/>
        </div>
        <div className="col">
          <br />
          <h1 className="paragraph-header">Our Method</h1><br/>     
          <p>
          We use a peer to peer teaching method. PAN recruits student leaders from the local secondary schools who receive training on the topic of HIV/AIDS and other sexually transmitted diseases and in turn relay the information to their peers at their respective schools.  The PAN Student Assistants each lead their own groups to educate their peers on the topic of HIV. They receive coaching and mentoring from a PAN instructor who supports them and helps to ensure that the students are adequately informed on the topics they set out to discuss.
          </p>
          </div>
      </div>
      <div className="row">
        <div className="col-6">
        <br />
        <br/>
          <h1 className="paragraph-header">Our Students</h1>
        <br/>
          <p>
          Our students come from all over Gokana Local Government area and are between the ages of 14 through 19. They are each affiliated with one of the following secondary schools:
          </p>
          <ul>
            <li>Community Secondary School Bera</li>
            <li>Community Secondary School Biara</li>
            <li>Bodo City Girls School</li>
            <li>Apostolic Community Secondary School Deeyor</li>
            <li>Government Secondary School Kpor</li>
            <li>Community Secondary School Mogho</li>
            <li>Community Secondary School Nweol</li>
            <li>St Pius Boys School, Bodo City</li>
          </ul>
          <br/>
        </div>
        <div className="col-6">
        <img alt="" src= {home02} id="image-home02" />
        </div>
      </div>
      <div className="row">
        <div className="col">
        <p>Being part of PAN takes a lot of time effort and dedication. Students must attend monthly training meetings, spend many hours in preparation to deliver lessons to their peers and attend and organize other community activities for the continuous improvement of their knowledge.</p>
          <p>PAN students are active leaders in their schools, churches and communities apart from their PAN responsibilities. We recruit only students who exhibit a desire to know Christ more and walk deeper in their Christian faith a per their profession as well as recommendations from teachers, principals and sometimes peers.</p>
          <p>Our students play different roles in PAN. Some focus on promoting our mission through social media, others mentor newer student assistants, and still others organize community service events. All of the students get ample training and opportunity to practice and improve on their teaching skills. All students also receive training by hospital workers about the facts of HIV as pertains to their immediate community.</p>
          <p>"PAN's aim is to nurture Christian leaders for Ogoni's future and so we strive to provide as many opportunities as possible for such practice."</p>
        </div>
      </div>
      <br/>
      <div className="row">
        <div className="col-6">
          <img alt="" src= {home03} id="image-home03" />
        </div>
        <div className="col-6">
        <img alt="" src= {home04} id="image-home04" />
        </div>      
      </div>
      <br/>
    </div>
  </div>
)

export default Home;












//HOME PAGE WITH GRAPHICS INSTEAD OF PICTURES///////////////////////////////////////////////////////////////////////////////////////////////////////////
// const Home = () => (
//   <div className="home-page">

//     <SplashPage id="splashimage" backgroundImage={handimagegray} >
//       <h1>Project AIDS Nigeria</h1>
//       <h2>For Love and Knowledge</h2>
//     </SplashPage>

//     <div className="container">
      
//       <div className="row">
//         <div className="col-lg-3 text-center">
//           <img alt="" src= {statimg01} id="image-statimg01"/>
//         </div>       
//         <div className="col-lg-9">
//           <br/>
//           <br/>
//           <h1 className="paragraph-header">Our Mission</h1>
//           <br />
//           <p>Project AIDS Nigeria is organized exclusively for the charitable and educational purpose of helping rural communities in Nigeria combat the HIV/AIDS epidemic. We achieve this goal by providing education for the prevention of HIV/AIDS through a Christian perspective and by working closely with local hospitals to better serve their HIV/AIDS patients. Project AIDS Nigeria (PAN) delivers educational workshops about HIV and other sexually transmitted diseases to prevent new infections and to reduce the stigma associated with HIV.  Project AIDS Nigeria also works closely with local hospitals to help them better serve their HIV/AIDS patients through providing volunteers for certain tasks or aiding with non-medicinal material needs.</p>
//         </div>
//       </div>

//       <div className="row">
//         <div className="col-lg-9">
//           <h1 className="paragraph-header">Our Method</h1><br/>     
//           <p>We use a peer to peer teaching method. PAN recruits student leaders from the local secondary schools who receive training on the topic of HIV/AIDS and other sexually transmitted diseases and in turn relay the information to their peers at their respective schools.  The PAN Student Assistants each lead their own groups to educate their peers on the topic of HIV. They receive coaching and mentoring from a PAN instructor who supports them and helps to ensure that the students are adequately informed on the topics they set out to discuss.</p>
//         </div>       
//         <div className="col-lg-3 text-center">
//           <img alt="" src= {statimg02} id="image-statimg02"/>
//         </div>
//       </div>

//       <div className="row">
//         <div className="col-lg-3">
//           <img alt="" src= {statimg03} id="image-statimg03"/>
//         </div>
//         <div className="col-lg-9" id="ourstudentstext">
//           <h1 className="paragraph-header">Our Students</h1>
//           <br/>
//           <p>Our students come from all over Gokana Local Government area and are between the ages of 14 through 19. They are each affiliated with one of the following secondary schools:</p>
//           <br/>
//           <div className="row">
//             <div className="col-6">
//               <ul>
//                 <li>Community Secondary School Bera</li>
//                 <li>Community Secondary School Biara</li>
//                 <li>Bodo City Girls School</li>
//                 <li>Apostolic Community Secondary School Deeyor</li>
//               </ul>
//             </div>
//           <div className="col-6">
//             <ul>
//               <li>Government Secondary School Kpor</li>
//               <li>Community Secondary School Mogho</li>
//               <li>Community Secondary School Nweol</li>
//               <li>St Pius Boys School, Bodo City</li>
//             </ul>
//           </div>
//           <br/>
//           </div>
//         </div>
//       </div>

//       <div className="row">
//         <div className="col-lg-12">
//           <br/>
//           <p>Being part of PAN takes a lot of time effort and dedication. Students must attend monthly training meetings, spend many hours in preparation to deliver lessons to their peers and attend and organize other community activities for the continuous improvement of their knowledge.</p>
//           <p>PAN students are active leaders in their schools, churches and communities apart from their PAN responsibilities. We recruit only students who exhibit a desire to know Christ more and walk deeper in their Christian faith a per their profession as well as recommendations from teachers, principals and sometimes peers.</p>
//           <p>Our students play different roles in PAN. Some focus on promoting our mission through social media, others mentor newer student assistants, and still others organize community service events. All of the students get ample training and opportunity to practice and improve on their teaching skills. All students also receive training by hospital workers about the facts of HIV as pertains to their immediate community.</p>
//         </div>
//       </div>
      
//       <div className="row">
//         <div className="col text-center">
//         <p id="quote">"PAN's aim is to nurture Christian leaders for Ogoni's future and so we strive to provide as many opportunities as possible for such practice."</p>
//         </div>
//       </div>

//     </div>
//   </div>
// )

// export default Home;













///OLD HOME PAGE WITH PICTURES FROM ORIGINAL PAN WEBSITE//////////////////////////////////////////////////////////////////////
// const Home = () => (
//   <div className="home-page">
//     <SplashPage backgroundImage={handimagegray} >
//       <h1>Project AIDS Nigeria</h1>
//       <h2>For Love and Knowledge</h2>
//     </SplashPage>
//     <div className="container">
//       <div className="row">
//         <div className="col">
//         <br />
//         <br />
//         <h1 className="paragraph-header">Our Mission</h1>
//           <br />
//           <p>
//             Project AIDS Nigeria is organized exclusively for the charitable and educational purpose of helping rural communities in Nigeria combat the HIV/AIDS epidemic. We achieve this goal by providing education for the prevention of HIV/AIDS through a Christian perspective and by working closely with local hospitals to better serve their HIV/AIDS patients.
//             Project AIDS Nigeria (PAN) delivers educational workshops about HIV and other sexually transmitted diseases to prevent new infections and to reduce the stigma associated with HIV.  Project AIDS Nigeria also works closely with local hospitals to help them better serve their HIV/AIDS patients through providing volunteers for certain tasks or aiding with non-medicinal material needs.
//           </p>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col">
//           <br />
//           <img alt="" src= {home01} id="image-home01"/>
//         </div>
//         <div className="col">
//           <br />
//           <h1 className="paragraph-header">Our Method</h1><br/>     
//           <p>
//           We use a peer to peer teaching method. PAN recruits student leaders from the local secondary schools who receive training on the topic of HIV/AIDS and other sexually transmitted diseases and in turn relay the information to their peers at their respective schools.  The PAN Student Assistants each lead their own groups to educate their peers on the topic of HIV. They receive coaching and mentoring from a PAN instructor who supports them and helps to ensure that the students are adequately informed on the topics they set out to discuss.
//           </p>
//           </div>
//       </div>
//       <div className="row">
//         <div className="col-6">
//         <br />
//         <br/>
//           <h1 className="paragraph-header">Our Students</h1>
//         <br/>
//           <p>
//           Our students come from all over Gokana Local Government area and are between the ages of 14 through 19. They are each affiliated with one of the following secondary schools:
//           </p>
//           <ul>
//             <li>Community Secondary School Bera</li>
//             <li>Community Secondary School Biara</li>
//             <li>Bodo City Girls School</li>
//             <li>Apostolic Community Secondary School Deeyor</li>
//             <li>Government Secondary School Kpor</li>
//             <li>Community Secondary School Mogho</li>
//             <li>Community Secondary School Nweol</li>
//             <li>St Pius Boys School, Bodo City</li>
//           </ul>
//           <br/>
//         </div>
//         <div className="col-6">
//         <img alt="" src= {home02} id="image-home02" />
//         </div>
//       </div>
//       <div className="row">
//         <div className="col">
//         <p>Being part of PAN takes a lot of time effort and dedication. Students must attend monthly training meetings, spend many hours in preparation to deliver lessons to their peers and attend and organize other community activities for the continuous improvement of their knowledge.</p>
//           <p>PAN students are active leaders in their schools, churches and communities apart from their PAN responsibilities. We recruit only students who exhibit a desire to know Christ more and walk deeper in their Christian faith a per their profession as well as recommendations from teachers, principals and sometimes peers.</p>
//           <p>Our students play different roles in PAN. Some focus on promoting our mission through social media, others mentor newer student assistants, and still others organize community service events. All of the students get ample training and opportunity to practice and improve on their teaching skills. All students also receive training by hospital workers about the facts of HIV as pertains to their immediate community.</p>
//           <p>"PAN's aim is to nurture Christian leaders for Ogoni's future and so we strive to provide as many opportunities as possible for such practice."</p>
//         </div>
//       </div>
//       <br/>
//       <div className="row">
//         <div className="col-6">
//           <img alt="" src= {home03} id="image-home03" />
//         </div>
//         <div className="col-6">
//         <img alt="" src= {home04} id="image-home04" />
//         </div>      
//       </div>
//       <br/>
//     </div>
//   </div>
// )

// export default Home;
