import React, { useRef } from 'react';
import axios from 'axios';

const AddOffice = () => {

    const name = useRef();
    const location = useRef();
    const phone = useRef();

    const submitHandler = async (e) => {
        e.preventDefault();
        const newOffice = {
            name: name.current.value,
            location: location.current.value,
            phone: phone.current.value,
        };
        try {
            await axios.post("http://localhost:4040/office", newOffice);
            // await axios.post(`${apiLink}/category`, newBlog);
            window.location.reload();
        } catch (err) { }
    };

    return (
        <div>
            <div className="big-font py-5">
                <h2>Add new Office</h2>
            </div>
            <form onSubmit={submitHandler}>
                <div className='inputField addInput'>
                    <input
                        ref={name}
                        placeholder='Office Name' type='text' required />
                    <input
                        ref={location}
                        placeholder='Location' type='text' required />
                    <input
                        ref={phone}
                        placeholder='Phone' type='number' required />
                </div>
                <div className='pt-4'>
                    <input className='px-5 py-3 fs-5' type="submit" value='Add Office' />
                </div>
            </form>
        </div>
    );
};

export default AddOffice;