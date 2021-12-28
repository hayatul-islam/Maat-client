import React from 'react';
import { useForm } from "react-hook-form";
import './AddExpertise.css'

const AddExpertise = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <div className="big-font py-5">
                <h2>Add new Expertise</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='inputField addInput'>
                    <input {...register("title")} placeholder='Title' type='text' />
                    <input {...register("sub_title")} placeholder='Sub title' type='text' />
                    <input {...register("image")} placeholder='Image url' />
                    <textarea {...register("description")} name="" id="" cols="30" rows="3" placeholder='Description'></textarea>

                </div>
                <div className='pt-4'>
                    <input className='px-5 py-3 fs-5' type="submit" value='Add Expertise' />
                </div>
            </form>
        </div>
    );
};

export default AddExpertise;