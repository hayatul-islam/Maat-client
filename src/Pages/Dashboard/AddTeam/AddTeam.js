import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddTeam = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://pure-refuge-33072.herokuapp.com/addTeam', data)
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
                <h2>Add new Team</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='inputField addInput'>
                    <input {...register("name")} placeholder='Name' type='text' />
                    <input {...register("job")} placeholder='Enter Job' type='text' />
                    <select {...register("job_status")} name="" id="">
                        <option value="Permanent Contact">Permanent Contact</option>
                        <option value="Part-time Contact">Part-time Contact</option>
                        <option value="Internship">Internship</option>
                    </select>
                    <input {...register("location")} placeholder='Enter City name' type='text' />
                    <input {...register("image")} placeholder='Image url' />
                    <input {...register("published")} value={new Date().toDateString()} />
                    <textarea {...register("about")} name="" id="" cols="30" rows="3" placeholder='About'></textarea>
                    <textarea {...register("mission")} name="" id="" cols="30" rows="3" placeholder='Mission'></textarea>
                    <textarea {...register("requirements")} name="" id="" cols="30" rows="3" placeholder='Requirements'></textarea>
                    <textarea {...register("benefit")} name="" id="" cols="30" rows="3" placeholder='Benefit'></textarea>
                </div>
                <div className='pt-4'>
                    <input className='px-5 py-3 fs-5' type="submit" value='Add Team' />
                </div>
            </form>
        </div>
    );
};

export default AddTeam;