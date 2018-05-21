import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";

import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import axios from "axios";

// Our Components
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Donate from "./pages/Donate/Donate";
import Questions from "./pages/Questions/Questions";
import Students from "./pages/Students/Students";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import Curriculum from "./pages/Curriculum/Curriculum";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Login from "./pages/Login/Login";
import Video1 from "./pages/Video1/Video1";
import Video2 from "./pages/Video2/Video2";
import Profile from "./pages/Profile/Profile";
import Signup from "./pages/Signup/Signup";
import AppCert from "./pages/Certification/Certification"

if (localStorage.getItem("id_token")) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`;
}

ReactDOM.render(
    <Router>
        <div>
            <Navbar />
            <Wrapper>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/donate" component={Donate} />
                <Route exact path="/questions" component={Questions} />
                <Route exact path="/students" component={Students} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/video" component={Video1} />
                <Route exact path="/video2" component={Video2} />
                <Route exact path="/curriculum" component={Curriculum} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/profile/:id" component={Profile} />
                <Route exact path="/certification" component={AppCert} />
            </Wrapper>
            <Footer />
        </div>
    </Router>
    , document.getElementById("root")

);

registerServiceWorker();
