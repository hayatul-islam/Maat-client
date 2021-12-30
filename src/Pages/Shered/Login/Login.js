// import React from 'react';
// import './Login.css'
// import { useForm } from "react-hook-form";
// import { Container } from 'react-bootstrap';
// import useFirebase from '../../../Hooks/useFirebase';

// const Login = () => {

//     const { signInUsingGoogle } = useFirebase();

//     const { register, handleSubmit } = useForm();
//     const onSubmit = data => {
//         console.log(data);
//     }

//     const handleGoogle = () => {
//         signInUsingGoogle()
//     }


//     return (
//         <div className='py-5'>
//             <Container>
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                     <div className='inputField'>
//                         <input className='form-control' {...register("email")} placeholder='Enter your email' type='email' required />
//                     </div>
//                     <div className='inputField'>
//                         <input className='form-control' {...register("password")} placeholder='Enter your password' type='password' required />
//                     </div>
//                     <div className='pt-4'>
//                         <input className='px-5 py-3 fs-5' type="submit" value='Submit' />
//                     </div>
//                 </form>
//                 <button onClick={handleGoogle} className="btn btn-success">google</button>
//             </Container>

//         </div>
//     );
// };

// export default Login;