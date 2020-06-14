import React from 'react'
import {useForm} from 'react-hook-form'

function UserForm() {

//useForm Hook
    const {register, handleSubmit, errors} = useForm();
 
    
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
    
        //pass register as ref to handle and track changes. Don't need to track changes and values manually
        //onSubmit as a callback - returns an object with all our form data
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

export default UserForm;
