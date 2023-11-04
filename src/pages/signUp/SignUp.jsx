import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { UserAuth } from '../../components/context/AuthContext';



const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const {createUser} = UserAuth()
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await createUser(email,password)
            navigate('/account')
        } catch(e){
            setError(e.message)
            console.log(e.message)
        }
    }



    return(
        <div className=''>
            <div>
                <h1 className=''>SignUp for your new account</h1>
                <p className=''>
                    Already have an accoount?{' '}
                    <Link to='/' className='underline'>
                        SignUp.
                    </Link>
                </p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col py-2'>
                    <label className='py-2 font-medium'>Email Address</label>
                    <input onChange={(e) => setEmail(e.target.value)} className='border p-3' type='email'/>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='py-2 font-medium'>Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} className='border p-3' type='Password'/>
                </div>
                <button classname='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>SignUp</button>
            </form>
        </div>
    )
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('')
//   const navigate = useNavigate()
//   const {createUser} = UserAuth()



//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setError('')
//     try {
//       await createUser(email,password)
//       navigate('/account')
//     } catch(e){
//       setError(e.message)
//       console.log(e.message)
//     }
  };
  
  export default SignUp