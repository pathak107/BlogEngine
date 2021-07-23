import { Card, CardContent, CardActions, Button } from '@material-ui/core';
import { useState } from 'react';
import ConfirmationDialog from '../../UI/Dialogs/ConfirmationDialog';
const CategoryCard = (props) => {
    const [confirmationDialogState, setConfirmationDialogState] = useState(false);

    // Button Handlers
    const deleteButtonHandler = () => {
        setConfirmationDialogState(true)
    }
    const editButtonHandler = () => {
    }

    // Event Handlers
    const deleteHandler = (confirm) => {
        setConfirmationDialogState(false);
        console.log(confirm);
    }
 
    return (
        <div>
            <ConfirmationDialog
                open={confirmationDialogState}
                isConfirmed={deleteHandler}
                message='Are you sure you want to delete this category?'
            />
    
            <Card variant='outlined'>
                <CardContent>
                    <h3>{props.name}</h3>
                    <p>{props.description} </p>
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



export default CategoryCard;
