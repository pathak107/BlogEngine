import { Container, } from '@material-ui/core';
import React from 'react';
import Editor from '../components/Core/Editor/Editor'
import MainHeader from '../components/UI/MainHeader/MainHeader';
import NewPostForm from '../components/Core/NewPostForm/NewPostForm';

const PostCreatePage = () => {
    return (
        <React.Fragment>
            <Container>
                <MainHeader/>
                <NewPostForm/>
                <h2>Write your post here:</h2>
            </Container>
            <Editor />
        </React.Fragment>

    );
}

export default PostCreatePage;