import { Container } from '@material-ui/core';
import AuthForm from '../components/Core/AuthForm/AuthForm';
import MainHeader from '../components/UI/MainHeader/MainHeader';
import React from 'react';
const Login = () => {
    const loginHandler = (email, password) => {
        console.log(email, password);
    }
    return (
        <React.Fragment>
            <MainHeader />
            <Container className='center-horizontal center-vertical' maxWidth='xs' >
                <AuthForm
                    type='Login'
                    isBusy={false}
                    getFormData={loginHandler}
                />
            </Container>
        </React.Fragment>

    );
}

export default Login;