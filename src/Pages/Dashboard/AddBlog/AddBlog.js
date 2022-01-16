import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddBlog = () => {

    const {
        register,
        handleSubmit,
        formState: { },
    } = useForm();

    const onSubmit = (data, e) => {
        const formData = new FormData();

        formData.append("title", data.title);
        formData.append("category", data.category);
        formData.append("sub_title", data.sub_title);
        formData.append("publish", data.publish);
        formData.append("description", data.description);
        formData.append("sub_description", data.sub_description);
        formData.append("image", data.image[0]);

        axios.post("https://pure-refuge-33072.herokuapp.com/addblog", formData)
            .then(res => {
                if (res.data.insertedId) {
                    alert('successfully')
                    e.target.reset();
                }
            })
    }

    return (
        <div>
            <div className="big-font py-5">
                <h2>Add new Blog</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='inputField addInput'>
                    <input {...register("title")} placeholder='Title' type='text' required />
                    <input {...register("sub_title")} placeholder='Sub title' type='text' required />
                    <input {...register("image")} type='file' placeholder='Image url' required />
                    <input {...register("category")} placeholder='Category' required />
                    <input {...register("publish")} value={new Date().toDateString()} required />
                    <textarea {...register("description")} name="description" id="" cols="30" rows="3" placeholder='Description' required></textarea>
                    <textarea {...register("sub_description")} name="sub_description" id="" cols="30" rows="3" placeholder='Sub Description' required></textarea>

                </div>
                <div className='pt-4'>
                    <input className='px-5 py-3 fs-5' type="submit" value='Add Blog' />
                </div>
            </form>
        </div>
    );
};

export default AddBlog;