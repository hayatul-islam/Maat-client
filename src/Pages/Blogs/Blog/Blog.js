import React from "react";
import { Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useMaat from "../../../Hooks/useMaat";

const Blog = ({ blog }) => {
  const { apiLink } = useMaat();
  const navigate = useNavigate();
  const handleBlog = (blogId) => {
    navigate(`/blogs/${blogId}`);
  };
  return (
    <Col xs={12} md={6}>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="blogContainer"
      >
        <div className="blogContent">
          <div className="">
            <h3>{blog?.title}</h3>
            <p className="">
              {blog?.publish} - <span className="">{blog?.category}</span>
            </p>
          </div>
          <div className="detailsBtn">
            <a
              onClick={() => handleBlog(blog?._id)}
              className="linkBtn d-flex align-items-center"
            >
              READ ARTICLE{" "}
              <Image src="https://uploads-ssl.webflow.com/6160407763f5cd74b27c2405/6160407763f5cd70b77c241f_icon-arrow-white-diag.svg" />
            </a>
          </div>
        </div>
        <div className="blogBgImage">
          {blog?.image.slice(0, 4) === "http" ? (
            <img src={blog?.image} alt="" />
          ) : (
            <img src={`${apiLink}/images/${blog?.image}`} alt="" />
          )}
        </div>
      </div>
    </Col>
  );
};

export default Blog;
