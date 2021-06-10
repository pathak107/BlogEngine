import { Grid, Container } from '@material-ui/core';
import React, {useState} from 'react';
import CreateNewButton from '../components/UI/CreateNewButton/CreateNewButton';
import MainHeader from '../components/UI/MainHeader/MainHeader';
import CategoryCard from '../components/Core/CategoryCard/CategoryCard'
import NewResource from '../components/Core/DialogForms/NewResource'
import NewCategoryForm from '../components/Core/NewCategoryForm/NewCategoryForm'

const Category = () => {
    const [newCategoryFormState, setNewCategoryFormState] = useState(false)

    // Button Handlers
    const newCategoryButtonHandler = () => {
        setNewCategoryFormState(true)
    }

    const newCategoryHandler = (confirm) => {
        setNewCategoryFormState(false)
    }
    return (
        <React.Fragment>
            <MainHeader />
            <Container>
                <NewResource
                    open={newCategoryFormState}
                    isConfirmed={newCategoryHandler}
                    new={true}
                >
                    <NewCategoryForm />
                </NewResource>
                <CreateNewButton
                    title='Want to add a new Category?'
                    onClick={ newCategoryButtonHandler }
                />
                <h2>All Categories</h2>
                <Grid container spacing={3}>
                    <Grid item md={4}>
                        <CategoryCard
                            name='Title of the post with big ass text.'
                            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
                        />
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}


export default Category;
