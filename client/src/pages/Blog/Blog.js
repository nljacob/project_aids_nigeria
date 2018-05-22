import React from "react";
// import Hero from "../components/Hero";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
import "./Blog.css";
import BlogElement from '../../components/Blog/Blog'

const Blog = () => (
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

export default Blog;