import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import './Story.css'

const Story = ({ }) => {

    window.addEventListener('load', function (event) {
        let all_sections = document.querySelectorAll('.section');

        all_sections.forEach((section) => {
            let offset_top = section.offsetTop;
            section.setAttribute("offset-top", offset_top);
        })
    })
    document.addEventListener('scroll', function (event) {

        let scroll_top = window.scrollY;
        let all_sections = document.querySelectorAll('.section');
        let number_items = all_sections.length;


        let found_element = null;
        let found_number = null;

        all_sections.forEach((section, index) => {

            let section_id = section.getAttribute('id');
            let nav_items = document.querySelector(`li[data-section="' + section_id + '"]`)
            let offset_top = section.getAttribute('offset-top');

            if (scroll_top >= offset_top) {
                nav_items.classList.add('active');
                found_element = section;
                found_number = (index + 1);
            } else {
                nav_items.classList.remove('active');
            }
            console.log(found_number);

        })

    })

    return (


        <div>
            <nav className="navigation js--navigation">
                <div className='progress js--progress'>

                </div>
                <ul>
                    <li data-section="section1"><a href="#section1">section1</a></li>
                    <li data-section="section2"><a href="#section2">section2</a></li>
                    <li data-section="section3"><a href="#section3">section3</a></li>
                    <li data-section="section4"><a href="#section4">section4</a></li>
                </ul>
            </nav>
            <section className="section" id="section1">
                <p>section1</p>
            </section>
            <section className="section" id="section2">
                <p>section2</p>
            </section>
            <section className="section" id="section3">
                <p>section3</p>
            </section>
            <section className="section" id="section4">
                <p>section4</p>
            </section>
        </div>

    );
};

export default Story;