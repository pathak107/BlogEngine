import { TextField, Card, CardContent, Button, CircularProgress, CardActions } from '@material-ui/core';

const NewPostForm = (props) => {


    const formSubmitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <Card variant="outlined" >
                <CardContent>
                    <form noValidate autoComplete="off" onSubmit={formSubmitHandler}>
                        <TextField
                            id="outlined-basic"
                            label="Title"
                            variant="outlined"
                            margin='normal'
                            fullWidth
                        />
                        <TextField
                            id="outlined-basic"
                            label="Description"
                            variant="outlined"
                            margin='normal'
                            multiline
                            fullWidth
                        />

                    </form>
                </CardContent>
                <CardActions>
                    {props.isBusy ? <CircularProgress className='center-horizontal' /> :
                        <Button
                            variant="outlined"
                            color="primary"
                            size='large'
                            type='submit'
                        >
                            Create
                            </Button>}
                </CardActions>
            </Card>
        </div>
    );
}

export default NewPostForm;