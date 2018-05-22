import React from "react";
// import Hero from "../components/Hero";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
import "./ViewBlog.css";
import BlogElement from '../../components/ViewBlog/ViewBlog'

const ViewBlog = () => (
  <div className="blog-page">
    
    <div className="container">
    <div className="row">
                <div className="col text-center">
                <BlogElement />
                </div>
    </div>
    </div>
  </div>
);

export default ViewBlog;