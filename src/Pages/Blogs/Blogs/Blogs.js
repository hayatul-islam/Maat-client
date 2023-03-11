import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import useMaat from "../../../Hooks/useMaat";
import ContactUs from "../../Shered/ContactUs/ContactUs";
import Footer from "../../Shered/Footer/Footer";
import Blog from "../Blog/Blog";
import "./Blogs.css";

const Blogs = () => {
  const [category, setCategory] = useState("");
  const { blogs } = useMaat();
  //   const [blogs, setBlogs] = useState([]);
  //   useEffect(() => {
  //     // fetch(`${apiLink}/blogs`)
  //     fetch("./blog.json")
  //       .then((res) => res.json())
  //       .then((data) => setBlogs(data));
  //   }, []);

  const filterCategory = blogs?.filter((blog) => blog?.category === category);

  const handleCategory = (category) => {
    setCategory(category);
  };
  return (
    <div className="banner-container pt-3">
      <Container>
        <div>
          <div className="big-font">
            <h1>CHECK OUR</h1>
            <h1 className="text-end pt-4">LATEST ARTICLES</h1>
          </div>
          <div className="mt-4">
            <a className="downBtn downLinkBtn" href="#blogs">
              <i className="fas fa-arrow-down"></i>
            </a>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          id="blogs"
          className="mainSection"
        >
          <div className="text-light downLinkBtn">
            <h1 className="pb-3">Filter by categories :</h1>
            <Button
              onClick={() => handleCategory("")}
              className="me-2 py-3 px-4 mb-4"
              variant="outline-light"
            >
              All
            </Button>
            <Button
              onClick={() => handleCategory("Others")}
              className="me-2 py-3 px-4 mb-4"
              variant="outline-light"
            >
              Others
            </Button>
            <Button
              onClick={() => handleCategory("Business Law")}
              className="me-2 py-3 px-4 mb-4"
              variant="outline-light"
            >
              Business Law
            </Button>
            <Button
              onClick={() => handleCategory("Company Life")}
              className="me-2 py-3 px-4 mb-4"
              variant="outline-light"
            >
              Company Life
            </Button>
            <Button
              onClick={() => handleCategory("Law History")}
              className="me-2 py-3 px-4 mb-4"
              variant="outline-light"
            >
              Law History
            </Button>
          </div>
          <Row>
            {category === ""
              ? blogs.map((blog) => <Blog key={blog?._id} blog={blog}></Blog>)
              : filterCategory.map((blog) => (
                  <Blog key={blog?._id} blog={blog}></Blog>
                ))}
          </Row>
        </div>
      </Container>

      <ContactUs />
      <Footer />
    </div>
  );
};

export default Blogs;
