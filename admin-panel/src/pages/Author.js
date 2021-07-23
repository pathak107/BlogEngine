import { Grid, Container } from '@material-ui/core';
import React, { useState } from 'react';
import CreateNewButton from '../components/UI/CreateNewButton/CreateNewButton';
import MainHeader from '../components/UI/MainHeader/MainHeader';
import AuthorCard from '../components/Core/AuthorCard/AuthorCard';
import NewResource from '../components/Core/DialogForms/NewResource';
import NewAuthorForm from '../components/Core/NewAuthorForm/NewAuthorForm';

const Author = () => {
    const [newAuthorFormState, setNewAuthorFormState] = useState(false)

    // Button Handlers
    const newAuthorButtonHandler = () => {
        setNewAuthorFormState(true)
    }

    const newAuthorHandler = (confirm) => {
        setNewAuthorFormState(false)
    }
    return (
        <React.Fragment>
            <MainHeader />
            <Container>
                <NewResource
                    open={newAuthorFormState}
                    isConfirmed={newAuthorHandler}
                    new={true}
                >
                    <NewAuthorForm />
                </NewResource>
                <CreateNewButton
                    title='Want to add a new Author?'
                    onClick={newAuthorButtonHandler}
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
