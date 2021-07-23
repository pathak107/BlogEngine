import { Card, CardContent, CardActions, Button } from '@material-ui/core';
import { useState } from 'react';
import ConfirmationDialog from '../../UI/Dialogs/ConfirmationDialog';
import NewAuthorForm from '../NewAuthorForm/NewAuthorForm';
import NewResource from '../DialogForms/NewResource';

const AuthorCard = (props) => {
    const [confirmationDialogState, setConfirmationDialogState] = useState(false);
    const [newAuthorFormState, setNewAuthorFormState] = useState(false)

    // Button Handlers
    const deleteButtonHandler = () => {
        setConfirmationDialogState(true)
    }
    const editButtonHandler = () => {
        setNewAuthorFormState(true);
    }


    // Event Handlers
    const deleteHandler = (confirm) => {
        setConfirmationDialogState(false);
        console.log(confirm);
    }
    const editAuthorHandler = (confirm) => {
        setNewAuthorFormState(false)
    }

    return (
        <div>
            <ConfirmationDialog
                open={confirmationDialogState}
                isConfirmed={deleteHandler}
                message='Are you sure you want to delete this author?'
            />

            <NewResource
                open={newAuthorFormState}
                isConfirmed={editAuthorHandler}
                new={false}
            >
                <NewAuthorForm/>
            </NewResource>
            <Card variant='outlined'>
                <CardContent>
                    <h3>{props.name}</h3>
                    <p>{props.bio} </p>
                    <i class="fab fa-instagram"></i>
                </CardContent>
                <CardActions>
                    <Button variant="outlined" color="primary" onClick={editButtonHandler}>
                        Edit
                    </Button>
                    <Button variant="outlined" color="primary" onClick={deleteButtonHandler}>
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default AuthorCard;
