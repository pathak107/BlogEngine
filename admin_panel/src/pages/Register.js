import { Container } from '@material-ui/core';
import AuthForm from '../components/AuthForm/AuthForm';
import MainHeader from '../components/MainHeader/MainHeader';
const Register = () => {
    const registerHandler=(email,password, name)=>{
        console.log(email, password, name);
    }
    return (
        <div>
            <MainHeader/>
            <Container className='center-horizontal center-vertical' maxWidth='xs' >
            <AuthForm 
                type='Register'
                isBusy={false}
                getFormData={registerHandler}
            />
        </Container>
        </div>
        
    );
}

export default Register;