import { TextField, Card, CardContent, Button} from '@material-ui/core';
import { useState } from 'react';
import ProgressBar from '../../UI/ProgressBar/ProgressBar';
const AuthForm = (props) => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userName, setUserName] = useState('');
    
    const formSubmitHandler = (event) => {
        event.preventDefault();
        props.getFormData(userEmail,userPassword,userName);
    }

    const userEmailChangeHandler = (event) => {
        setUserEmail(event.target.value);
    }

    const userPasswordChangeHandler = (event) => {
        setUserPassword(event.target.value);
    }

    const userNameChangeHandler =(event)=>{
        setUserName(event.target.value);
    }

    return (
        <div>
            <h1 className='center-horizontal'>{props.type}</h1>
            <Card variant="outlined" >
                <CardContent>
                    <form noValidate autoComplete="off" onSubmit={formSubmitHandler}>
                        {props.type === 'Register' && <TextField
                            id="outlined-basic"
                            label='Name'
                            variant="outlined"
                            fullWidth
                            margin='normal'
                            onChange={userNameChangeHandler}
                        />}
                        <TextField
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            fullWidth
                            margin='normal'
                            type='email'
                            onChange={userEmailChangeHandler}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            type='password'
                            fullWidth
                            margin='normal'
                            onChange={userPasswordChangeHandler}
                        />
                        {props.isBusy ? <ProgressBar className='center-horizontal' /> :
                            <Button
                                variant="outlined"
                                color="primary"
                                size='large'
                                type='submit'
                            >
                                {props.type}
                            </Button>}
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

export default AuthForm;