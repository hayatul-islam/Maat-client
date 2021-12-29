import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddBlog = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://pure-refuge-33072.herokuapp.com/addblog', data)
            .then(result => {
                console.log(result);
                if (result.data.insertedId) {
                    reset()
                }
            })
    };

    return (
        <div>
            <div className="big-font py-5">
                <h2>Add new Blog</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='inputField addInput'>
                    <input {...register("title")} placeholder='Title' type='text' />
                    <input {...register("sub_title")} placeholder='Sub title' type='text' />
                    <input {...register("image")} placeholder='Image url' />
                    <input {...register("category")} placeholder='Category' />
                    <input {...register("publish")} value={new Date().toDateString()} />
                    <textarea {...register("description")} name="" id="" cols="30" rows="3" placeholder='Description'></textarea>
                    <textarea {...register("sub_description")} name="" id="" cols="30" rows="3" placeholder='Sub Description'></textarea>

                </div>
                <div className='pt-4'>
                    <input className='px-5 py-3 fs-5' type="submit" value='Add Blog' />
                </div>
            </form>
        </div>
    );
};

export default AddBlog;