import axios from 'axios';
import React, { useRef } from 'react';
import useMaat from '../../../Hooks/useMaat';
const Swal = require('sweetalert2');

const MakeAdmin = () => {

    const { apiLink } = useMaat();
    const email = useRef();

    const submitHandler = async (e) => {
        e.preventDefault();
        const newAdmin = {
            email: email.current.value,
        };
        try {
            await axios.put(`${apiLink}/users`, newAdmin)
                .then(result => {
                    if (result.status == 200) {
                        Swal.fire(
                            'Successfully!',
                            'Make an Admin',
                            'success'
                        )
                    }
                });
            e.target.reset()
        } catch (err) { }
    };

    return (
        <div>
            <div className="big-font py-5">
                <h2>Make an Admin</h2>
            </div>
            <form onSubmit={submitHandler}>
                <div className='inputField addInput'>
                    <input
                        ref={email}
                        name="email"
                        placeholder='Enter Email'
                        type='text' required />
                </div>
                <div className='pt-4'>
                    <input className='px-5 py-3 fs-5' type="submit" value='Make an Admin' />
                </div>
            </form>
        </div>
    );
};

export default MakeAdmin;