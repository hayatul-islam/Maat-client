import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddStory = () => {

    // const { register, handleSubmit, reset } = useForm();
    // const onSubmit = data => {
    //     axios.post('https://pure-refuge-33072.herokuapp.com/addStory', data)
    //         .then(result => {
    //             console.log(result);
    //             if (result.data.insertedId) {
    //                 reset()
    //             }
    //         })
    // };

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
        formData.append("about", data.about);
        formData.append("description", data.description);
        formData.append("year", data.year);
        formData.append("image", data.image[0]);

        axios.post("https://pure-refuge-33072.herokuapp.com/addStory", formData)
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
                <h2>Add new Story</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='inputField addInput'>
                    <input {...register("title")} placeholder='Title' type='text' required />
                    <input {...register("sub_title")} placeholder='Sub title' type='text' required />
                    <input {...register("about")} placeholder='About' type='text' required />
                    <input {...register("image")} type='file' placeholder='Story Image' required />
                    <input {...register("year")} value={new Date().getFullYear()} required />
                    <textarea {...register("description")} name="description" id="" cols="30" rows="3" placeholder='Description' required></textarea>

                </div>
                <div className='pt-4'>
                    <input className='px-5 py-3 fs-5' type="submit" value='Add Story' />
                </div>
            </form>
        </div>
    );
};

export default AddStory;