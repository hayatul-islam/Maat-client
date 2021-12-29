import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddOffice = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://pure-refuge-33072.herokuapp.com/addOffice', data)
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
                <h2>Add new Office</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='inputField addInput'>
                    <input {...register("name")} placeholder='Office Name' type='text' required />
                    <input {...register("location")} placeholder='Location' type='text' required />
                    <input {...register("phone")} placeholder='Phone' type='number' required />

                </div>
                <div className='pt-4'>
                    <input className='px-5 py-3 fs-5' type="submit" value='Add Office' />
                </div>
            </form>
        </div>
    );
};

export default AddOffice;