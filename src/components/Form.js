import React, {useState} from 'react'
import {useForm} from 'react-hook-form'

const Form = () => {

//useForm Hook
    const {register, handleSubmit, errors} = useForm();
    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')
    // const [email, setEmail] = useState('')
    // const [bio, setBio] = useState('')
    // const [profession, setProfession] = useState('')
    // const [techstack, setTechstack] = useState('')

    // const handleSubmit = (event) => {
    //     // setUsername(event.target.value)
    //     // setPassword(event.target.value)
    //     // setBio(event.target.value)
    //     // setProfession(event.target.value)
    //     // setTechstack(event.target.value)
    // }
    
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        //pass register as ref to handle and track changes. Don't need to track changes and values manually
        //onSubmit as a callback - get a processed object with all our form
        //pass validations to register fn as optional arguments
        <div>
            <h1>Form Component</h1>
            <h2>Sign up as a Professional</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Username" autoComplete="off" name="username" ref={register}/>
                <input type="password" placeholder="Password" autoComplete="off" name="password" ref={register({required: true, minLength: 8})}/>
                {errors.password && <p>Password must be at least 8 characters long</p>}
                <input type="text" placeholder="Email address" name="email" ref={register}/>
                <input type="text" placeholder="Bio" name="bio" ref={register}/>
                <input type="text" placeholder="Profession" name="profession" ref={register}/>
                <input type="text" placeholder="TechStack" name="techstack" ref={register}/>
                <input type="submit"/>
            </form>
            



        </div>
    )
}

export default Form;
