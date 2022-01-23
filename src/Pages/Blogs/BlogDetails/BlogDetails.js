import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useMaat from '../../../Hooks/useMaat';
import ContactUs from '../../Shered/ContactUs/ContactUs';
import Footer from '../../Shered/Footer/Footer';
import Blog from '../Blog/Blog';

const BlogDetails = () => {

    const { apiLink } = useMaat();
    const { blogId } = useParams();
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch(`${apiLink}/blogs`)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    const blogFind = blogs.find(blog => blog?._id === blogId);
    const blogFilter = blogs.filter(blog => blog?._id !== blogId);

    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} md={3}></Col>
                    <Col xs={12} md={6}>
                        <div className='blogDetails'>
                            {
                                blogFind?.image.slice(0, 4) === 'http' ?
                                    <img className='w-100' src={blogFind?.image} alt="" />
                                    :
                                    <img className='w-100' src={`${apiLink}/images/${blogFind?.image}`} alt="" />
                            }

                            <div className="big-font">
                                <h2>{blogFind?.title}</h2>
                                <p>{blogFind?.description}</p>
                                <h3>{blogFind?.sub_tittle}</h3>
                                <p>{blogFind?.sub_description}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className='pb-5'>
                    <Row>
                        <div className='big-font pt-5 mt-5'>
                            <h2>Other blog posts</h2>
                        </div>
                        {
                            blogFilter.slice(0, 4).map(blog => <Blog key={blog?._id} blog={blog}></Blog>)
                        }
                    </Row>
                </div>
            </Container>
            <ContactUs />
            <Footer />
        </div>
    );
};

export default BlogDetails;


