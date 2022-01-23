import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useMaat from '../../../Hooks/useMaat';

const AddBlog = () => {

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
    //     formData.append("publish", data.publish);
    //     formData.append("description", data.description);
    //     formData.append("sub_description", data.sub_description);
    //     formData.append("image", data.image[0]);

    //     axios.post("/addblog", formData)
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
    const publish = useRef();
    const category = useRef();
    const description = useRef();
    const sub_description = useRef();

    const submitHandler = async (e) => {
        e.preventDefault();
        const newBlog = {
            title: title.current.value,
            sub_title: sub_title.current.value,
            publish: publish.current.value,
            category: category.current.value,
            description: description.current.value,
            sub_description: sub_description.current.value,
        };
        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            newBlog.image = fileName;
            try {
                await axios.post(`${apiLink}/api/upload`, data);
            } catch (err) { }
        }
        console.log(newBlog);
        try {
            await axios.post(`${apiLink}/blogs`, newBlog);
            window.location.reload();
        } catch (err) { }
    };

    return (
        <div>
            <div className="big-font py-5">
                <h2>Add new Blog</h2>
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
                        onChange={(e) => setFile(e.target.files[0])}
                        type='file'
                        placeholder='Image url' required />
                    <input
                        ref={category}
                        placeholder='Category' required />
                    <input
                        ref={publish}
                        value={new Date().toDateString()} required />
                    <textarea
                        ref={description}
                        name="description" id="" cols="30" rows="3"
                        placeholder='Description' required></textarea>
                    <textarea
                        ref={sub_description}
                        name="sub_description" id="" cols="30" rows="3"
                        placeholder='Sub Description' required></textarea>

                </div>
                <div className='pt-4'>
                    <input className='px-5 py-3 fs-5' type="submit" value='Add Blog' />
                </div>
            </form>
        </div>
    );
};

export default AddBlog;