import React from "react";
import { Container } from "react-bootstrap";
import '../styles/blog.css'
import BlogList from '../BlogComponents/BlogList'
export default function BlogScreen() {
  return (
    <div className="blog">
      <p className="py-3"></p>
      <Container className="py-5">
        <BlogList/>


      </Container>
    </div>
  );
}
