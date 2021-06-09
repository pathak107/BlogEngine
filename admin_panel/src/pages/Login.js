import { Container } from '@material-ui/core';
import AuthForm from '../components/AuthForm/AuthForm';
import MainHeader from '../components/MainHeader/MainHeader';
const Login = () => {
    const loginHandler = (email, password) => {
        console.log(email, password);
    }
    return (
        <div>
            <MainHeader />
            <Container className='center-horizontal center-vertical' maxWidth='xs' >
                <AuthForm
                    type='Login'
                    isBusy={false}
                    getFormData={loginHandler}
                />
            </Container>
        </div>

    );
}

export default Login;