import React from "react";
import { Col, Row } from "react-bootstrap";
import BlogItem from "../blog-item/BlogItem";
import { useEffect, useState } from "react";

const BlogList = (props) => {
  const [posts, setPosts] = useState([]);

  const getBlogPosts = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_BE_URL}/blogPosts`);
      if (res.ok) {
        let data = await res.json();
        setPosts(data);
        console.log(data);
      } else {
        alert("Problem with fetch!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBlogPosts();
  }, []);

  return (
    <Row>
      {posts.map((post) => (
        <Col md={4} style={{ marginBottom: 50 }} key={post.id}>
          <BlogItem key={post.title} {...post} />
        </Col>
      ))}
    </Row>
  );
};

export default BlogList;
