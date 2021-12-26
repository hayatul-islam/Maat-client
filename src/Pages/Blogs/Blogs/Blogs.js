import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import Blog from '../Blog/Blog';
import './Blogs.css';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    const [category, setCategory] = useState('');

    useEffect(() => {
        fetch('https://pure-refuge-33072.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    const filterCategory = blogs?.filter(blog => blog?.category === category);

    const handleCategory = category => {
        setCategory(category);
    }
    return (
        <div className='banner-container py-3'>
            <Container>
                <div>
                    <div className='big-font'>
                        <h1>CHECK OUR</h1>
                        <h1 className='text-end'>LATEST ARTICLES</h1>
                    </div>
                    <div className="mt-4">
                        <a className='downBtn' href="#about"><i className="fas fa-arrow-down"></i></a>
                    </div>
                </div>

                <div className='py-5 text-light'>
                    <h1 className='pb-3'>Filter by categories :</h1>
                    <Button onClick={() => handleCategory('')} className='me-2 py-3 px-4' variant='outline-light'>All</Button>
                    <Button onClick={() => handleCategory('Others')} className='me-2 py-3 px-4' variant='outline-light'>Others</Button>
                    <Button onClick={() => handleCategory('Business Law')} className='me-2 py-3 px-4' variant='outline-light'>Business Law</Button>
                    <Button onClick={() => handleCategory('Company Life')} className='me-2 py-3 px-4' variant='outline-light'>Company Life</Button>
                    <Button onClick={() => handleCategory('Law History')} className='me-2 py-3 px-4' variant='outline-light'>Law History</Button>
                </div>
                <Row>
                    {
                        category === '' ? blogs.map(blog => <Blog key={blog?._id} blog={blog}></Blog>) : filterCategory.map(blog => <Blog key={blog?._id} blog={blog}></Blog>)
                    }
                </Row>

            </Container>
        </div>
    );
};

export default Blogs;