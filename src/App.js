import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Donate from "./pages/Donate/Donate";
import Questions from "./pages/Questions/Questions";
import Students from "./pages/Students/Students";
import Blog from "./pages/Blog/Blog";
import Curriculum from "./pages/Curriculum/Curriculum";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

const App = () => (
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
        <Route exact path="/curriculum" component={Curriculum} />
      </Wrapper>
      <Footer />
    </div>
  </Router>
);

export default App;
