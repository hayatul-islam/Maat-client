import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import Slider from "react-slick";

const BlogSlider = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://pure-refuge-33072.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    const settings = {

        className: "center",
        centerMode: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2.,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2.1,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 0
                }
            }
        ]
    };

    const navigate = useNavigate();
    const handleBlog = blogId => {
        navigate(`/blogs/${blogId}`)
    }


    return (
        <div className='mt-5 pt-5'>
            <Container>
                <div className="big-font">
                    <h2> LATEST BLOG POSTS </h2>
                </div>
            </Container>
            <div className=''>
                <Slider {...settings}>
                    {
                        blogs.map(blog => <div>
                            <div className='blogContainer mx-3'>
                                <div className='blogContent'>
                                    <div className="">
                                        <h3>{blog?.title.slice(0, 45)}</h3>
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
                        </div>)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default BlogSlider;