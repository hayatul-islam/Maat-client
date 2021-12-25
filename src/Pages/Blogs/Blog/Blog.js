import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Blog = ({ blog }) => {

    const navigate = useNavigate();
    const handleBlog = blogId => {
        navigate(`/blogs/${blogId}`)
    }
    return (
        <Col xs={12} md={6}>
            <div className='blogContainer'>
                <div className='blogContent'>
                    <div className="">
                        <h3>{blog?.title}</h3>
                        <p className=''>{blog?.publish} - <span className=''>{blog?.category}</span></p>
                    </div>
                    <div className="detailsBtn">
                        <Button onClick={() => handleBlog(blog?._id)} className='px-3 py-2' variant='light'>READ ARTICLE</Button>
                    </div>
                    <div className='blogBgImage'>
                        <img src={blog?.image} alt="" />
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default Blog;

