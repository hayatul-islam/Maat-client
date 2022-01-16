import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddTeam = () => {

    const {
        register,
        handleSubmit,
        formState: { },
    } = useForm();

    const onSubmit = (data, e) => {
        const formData = new FormData();

        formData.append("name", data.name);
        formData.append("job", data.job);
        formData.append("job_status", data.job_status);
        formData.append("email", data.email);
        formData.append("linkedin", data.linkedin);
        formData.append("location", data.location);
        formData.append("published", data.published);
        formData.append("about", data.about);
        formData.append("mission", data.mission);
        formData.append("requirements", data.requirements);
        formData.append("benefit", data.requirements);
        formData.append("image", data.image[0]);

        axios.post("https://pure-refuge-33072.herokuapp.com/addTeam", formData)
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
                <h2>Add new Team</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='inputField addInput'>
                    <input {...register("name")} placeholder='Name' type='text' required />
                    <input {...register("job")} placeholder='Enter Job' type='text' required />
                    <select {...register("job_status")} name="" id="" required>
                        <option value="Permanent Contact">Permanent Contact</option>
                        <option value="Part-time Contact">Part-time Contact</option>
                        <option value="Internship">Internship</option>
                    </select>
                    <input {...register("email")} placeholder='Enter Email' type='text' required />
                    <input {...register("linkedin")} placeholder='Enter Linkedin url' type='text' required />
                    <input {...register("location")} placeholder='Enter City name' type='text' required />
                    <input {...register("image")} type="file" placeholder='Image url' />
                    <input {...register("published")} value={new Date().toDateString()} />
                    <textarea {...register("about")} name="about" id="" cols="30" rows="3" placeholder='About' required></textarea>
                    <textarea {...register("mission")} name="mission" id="" cols="30" rows="3" placeholder='Mission' required></textarea>
                    <textarea {...register("requirements")} name="requirements" id="" cols="30" rows="3" placeholder='Requirements' required></textarea>
                    <textarea {...register("benefit")} name="benefit" id="" cols="30" rows="3" placeholder='Benefit' required></textarea>
                </div>
                <div className='pt-4'>
                    <input className='px-5 py-3 fs-5' type="submit" value='Add Team' />
                </div>
            </form>
        </div>
    );
};

export default AddTeam;