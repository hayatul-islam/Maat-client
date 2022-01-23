import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useMaat from '../../../Hooks/useMaat';

const AddStory = () => {

    // const {
    //     register,
    //     handleSubmit,
    //     formState: { },
    // } = useForm();

    // const onSubmit = (data, e) => {
    //     const formData = new FormData();

    //     formData.append("title", data.title);
    //     formData.append("category", data.category);
    //     formData.append("sub_title", data.sub_title);
    //     formData.append("about", data.about);
    //     formData.append("description", data.description);
    //     formData.append("year", data.year);
    //     formData.append("image", data.image[0]);

    //     axios.post("/addStory", formData)
    //         .then(res => {
    //             if (res.data.insertedId) {
    //                 alert('successfully')
    //                 e.target.reset();
    //             }
    //         })
    // }

    const { apiLink } = useMaat();
    const [file, setFile] = useState(null);
    const title = useRef();
    const sub_title = useRef();
    const about = useRef();
    const year = useRef();
    const description = useRef();

    const submitHandler = async (e) => {
        e.preventDefault();
        const newStory = {
            title: title.current.value,
            sub_title: sub_title.current.value,
            about: about.current.value,
            year: year.current.value,
            description: description.current.value,
        };
        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            newStory.image = fileName;
            try {
                // await axios.post("http://localhost:4040/api/upload", data);
                await axios.post(`${apiLink}/api/upload`, data);
            } catch (err) { }
        }
        try {
            // await axios.post("http://localhost:4040/story", newStory);
            await axios.post(`${apiLink}/story`, newStory);
            window.location.reload();
        } catch (err) { }
    };


    return (
        <div>
            <div className="big-font py-5">
                <h2>Add new Story</h2>
            </div>
            <form onSubmit={submitHandler}>
                <div className='inputField addInput'>
                    <input
                        ref={title}
                        placeholder='Title'
                        type='text' required />
                    <input
                        ref={sub_title}
                        placeholder='Sub title'
                        type='text' required />
                    <input
                        ref={about}
                        placeholder='About'
                        type='text' required />
                    <input
                        onChange={(e) => setFile(e.target.files[0])}
                        type='file'
                        placeholder='Story Image' required />
                    <input
                        ref={year}
                        value={new Date().getFullYear()} required />
                    <textarea
                        ref={description}
                        name="description"
                        id="" cols="30" rows="3"
                        placeholder='Description' required></textarea>

                </div>
                <div className='pt-4'>
                    <input
                        className='px-5 py-3 fs-5'
                        type="submit" value='Add Story' />
                </div>
            </form>
        </div>
    );
};

export default AddStory;