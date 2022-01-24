import React, { useRef, useState } from 'react';
import axios from 'axios';
import useMaat from '../../../Hooks/useMaat';

const AddTeam = () => {

    // const {
    //     register,
    //     handleSubmit,
    //     formState: { },
    // } = useForm();

    // const onSubmit = (data, e) => {
    //     const formData = new FormData();

    //     formData.append("name", data.name);
    //     formData.append("job", data.job);
    //     formData.append("job_status", data.job_status);
    //     formData.append("email", data.email);
    //     formData.append("linkedin", data.linkedin);
    //     formData.append("location", data.location);
    //     formData.append("published", data.published);
    //     formData.append("about", data.about);
    //     formData.append("mission", data.mission);
    //     formData.append("requirements", data.requirements);
    //     formData.append("benefit", data.requirements);
    //     formData.append("image", data.image[0]);

    //     axios.post("/addTeam", formData)
    //         .then(res => {
    //             if (res.data.insertedId) {
    //                 alert('successfully')
    //                 e.target.reset();
    //             }
    //         })
    // }


    const { apiLink } = useMaat();
    const [file, setFile] = useState(null);
    const name = useRef();
    const job = useRef();
    const job_status = useRef();
    const published = useRef();
    const email = useRef();
    const linkedin = useRef();
    const location = useRef();
    const about = useRef();
    const mission = useRef();
    const requirements = useRef();
    const benefit = useRef();

    const submitHandler = async (e) => {
        e.preventDefault();
        const newTeam = {
            name: name.current.value,
            job: job.current.value,
            job_status: job_status.current.value,
            email: email.current.value,
            linkedin: linkedin.current.value,
            location: location.current.value,
            published: published.current.value,
            about: about.current.value,
            mission: mission.current.value,
            requirements: requirements.current.value,
            benefit: benefit.current.value,
        };
        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            newTeam.image = fileName;

            console.log(newTeam);
            try {
                await axios.post(`${apiLink}/api/upload`, data);
            } catch (err) { }
        }
        try {
            await axios.post(`${apiLink}/teams`, newTeam);
            window.location.reload();
        } catch (err) { }
    };

    return (
        <div>
            <div className="big-font py-5">
                <h2>Add new Team</h2>
            </div>
            <form onSubmit={submitHandler}>
                <div className='inputField addInput'>
                    <input
                        ref={name}
                        placeholder='Name'
                        type='text' required />
                    <input
                        ref={job}
                        placeholder='Enter Job'
                        type='text' required />
                    <select
                        ref={job_status}
                        name="" id="" required>
                        <option value="Permanent Contact">Permanent Contact</option>
                        <option value="Part-time Contact">Part-time Contact</option>
                        <option value="Internship">Internship</option>
                    </select>
                    <input
                        ref={email}
                        placeholder='Enter Email'
                        type='email' required />
                    <input
                        ref={linkedin}
                        placeholder='Enter Linkedin url'
                        type='text' required />
                    <input
                        ref={location}
                        placeholder='Enter City name'
                        type='text' required />
                    <input
                        onChange={(e) => setFile(e.target.files[0])}
                        type="file"
                        placeholder='Image url' />
                    <input
                        ref={published}
                        value={new Date().toDateString()} />
                    <textarea
                        ref={about}
                        name="about" id="" cols="30" rows="3"
                        placeholder='About' required></textarea>
                    <textarea
                        ref={mission}
                        name="mission" id="" cols="30" rows="3"
                        placeholder='Mission' required></textarea>
                    <textarea
                        ref={requirements}
                        name="requirements" id="" cols="30" rows="3"
                        placeholder='Requirements' required></textarea>
                    <textarea
                        ref={benefit}
                        name="benefit" id="" cols="30" rows="3"
                        placeholder='Benefit' required></textarea>
                </div>
                <div className='pt-4'>
                    <input className='px-5 py-3 fs-5' type="submit" value='Add Team' />
                </div>
            </form>
        </div>
    );
};

export default AddTeam;