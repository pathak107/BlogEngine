import { Container, } from '@material-ui/core';
import Editor from '../components/Editor/Editor'
import MainHeader from '../components/MainHeader/MainHeader';
import NewPostForm from '../components/NewPostForm/NewPostForm';

const PostCreatePage = () => {
    return (
        <div>
            <Container>
                <MainHeader/>
                <NewPostForm/>
                <h2>Write your post here:</h2>
            </Container>
            <Editor />
        </div>

    );
}

export default PostCreatePage;