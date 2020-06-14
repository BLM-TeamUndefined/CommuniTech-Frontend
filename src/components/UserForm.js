import React from 'react'
import {useForm} from 'react-hook-form'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './UserForm.css'



const UserForm = () => {

//useForm Hook
    const {register, handleSubmit, errors} = useForm();
 
    
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        //pass register as ref to handle and track changes. Don't need to track changes and values manually
        //onSubmit as a callback - returns an object with all our form data
        //pass validations to register fn as optional arguments
   <Container>
        <Row>
        <Col md={{ span: 6, offset: 3 }}>
        <div>
            <h1>Form Component</h1>
            <h2>Sign up as a Professional</h2>
            {/*
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
            */}

            <form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group as={Row} controlId="Email">
                    <Form.Label column sm={2}>
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="email" placeholder="Email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="Username">
                    <Form.Label column sm={2}>
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="username" placeholder="Username" ref={register} />
                    {errors.password && <p>Password must be at least 8 characters long</p>}
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="Password">
                    <Form.Label column sm={2}>
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="password" placeholder="Password" ref={register({required: true, minLength: 8})} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="Profession">
                    <Form.Label column sm={2}>
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="profession" placeholder="Profession" ref={register} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="Bio">
                    <Form.Label column sm={2}>
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="bio" placeholder="Bio" ref={register} as="textarea" rows="3" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="Skills">
                    <Form.Label column sm={2}>
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="skills" placeholder="Skills" ref={register} as="textarea" rows="3" />
                    </Col>
                </Form.Group>
                

                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Button id="submit-button" type="submit">Sign Up</Button>
                    </Col>
                </Form.Group>
            </form>
                
        </div>
        </Col>
      </Row>
    </Container>
        
    )
}

export default UserForm;
