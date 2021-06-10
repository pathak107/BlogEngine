import { Grid, Container } from '@material-ui/core';
import React from 'react';
import CreateNewButton from '../components/UI/CreateNewButton/CreateNewButton';
import MainHeader from '../components/UI/MainHeader/MainHeader';
import AuthorCard from '../components/Core/AuthorCard/AuthorCard';

const Author = () => {
    const newAuthorButtonHandler = () => {

    }
    return (
        <React.Fragment>
            <MainHeader />
            <Container>
                <CreateNewButton
                    title='Want to add a new Author?'
                    onClick={ newAuthorButtonHandler }
                />
                <h2>All Authors</h2>
                <Grid container spacing={3}>
                    <Grid item md={4}>
                        <AuthorCard
                            name='Title of the post with big ass text.'
                            bio='Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
                            instagram='asdf'
                            facebook='asdf'
                            url='sdfgs'
                        />
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}

export default Author;
