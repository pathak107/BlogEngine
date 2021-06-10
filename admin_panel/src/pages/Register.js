import { Container } from '@material-ui/core';
import React from 'react';
import AuthForm from '../components/Core/AuthForm/AuthForm';
import MainHeader from '../components/UI/MainHeader/MainHeader';
const Register = () => {
    const registerHandler=(email,password, name)=>{
        console.log(email, password, name);
    }
    return (
        <React.Fragment>
            <MainHeader/>
            <Container className='center-horizontal center-vertical' maxWidth='xs' >
            <AuthForm 
                type='Register'
                isBusy={false}
                getFormData={registerHandler}
            />
        </Container>
        </React.Fragment>
        
    );
}

export default Register;