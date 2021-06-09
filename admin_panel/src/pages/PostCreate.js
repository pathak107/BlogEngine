import { Container, TextField } from '@material-ui/core';
import Editor from '../components/Editor/Editor'

const PostCreatePage = () => {
    return (
        <div>
            <Container>
                <form noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Standard" />
                    <TextField id="filled-basic" label="Filled" variant="filled" />
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </form>
            </Container>
            <Editor></Editor>
        </div>

    );
}

export default PostCreatePage;