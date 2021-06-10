import { Card, CardContent, CardActions, Button, CardMedia } from '@material-ui/core';
import { useState } from 'react';
import { useHistory } from 'react-router';
import ConfirmationDialog from '../../UI/Dialogs/ConfirmationDialog';
import ImagePicker from '../../UI/Dialogs/imagePicker';
const PostCard = (props) => {
    const history = useHistory();
    const confirmDialogInitialState = {
        open: false,
        closeAction: null,
        message: 'Are you perfctly sure?',
    }

    const [confirmationDialogState, setConfirmationDialogState] = useState(confirmDialogInitialState);
    const [imagePickerState, setImagePickerState] = useState(false);

    // Button Handlers
    const imageButtonHandler = () => {
        setImagePickerState(true);
    }
    const deleteButtonHandler = () => {
        setConfirmationDialogState({
            open: true,
            closeAction: deleteHandler,
            message: 'Are you sure you want to delete this particulat post?'
        })
    }
    const editButtonHandler = () => {
        history.push('/posts/edit/q1');
    }
    const togglePublishButtonHandler = () => {
        setConfirmationDialogState({
            open: true,
            closeAction: togglePublishHandler,
            message: `Are you sure you want to ${props.published ? 'unpublish' : 'publish'} this particulat post?`
        })
    }

    // Event Handlers
    const deleteHandler = (confirm) => {
        setConfirmationDialogState(confirmDialogInitialState);
        console.log(confirm);
    }
    const togglePublishHandler = (confirm) => {
        setConfirmationDialogState(confirmDialogInitialState);
        console.log(confirm);
    }
    const imageUploadHandler = (confirm) => {
        if(confirm){
            // reload all posts to reflect changes
        }
        setImagePickerState(false);
    }

    return (
        <div>
            <ConfirmationDialog
                open={confirmationDialogState.open}
                isConfirmed={confirmationDialogState.closeAction}
                message={confirmationDialogState.message}
            />
            <ImagePicker
                open={imagePickerState}
                message='Upload a feature image for this post. This will be displayed in cards all across web.'
                isConfirmed={imageUploadHandler}
            />
            <Card variant='outlined'>
                <CardMedia
                    image="https://blog.istemanipal.com/articles/single//5f73041fa385e11fc0c3daaa/uploads/1601373215000-neuralink-elon-musk-woke-studio-technology_dezeen_2364_hero-1.jpg"
                    title="Contemplative Reptile"
                    component="img"
                    onClick={imageButtonHandler}
                />
                <CardContent>
                    <h3>{props.title}</h3>
                    <p>{props.description} </p>
                </CardContent>
                <CardActions>
                    <Button variant="outlined" color="primary" onClick={editButtonHandler}>
                        Edit
                        </Button>
                    <Button variant="outlined" color="primary" onClick={deleteButtonHandler}>
                        Delete
                    </Button>
                    <Button variant="outlined" color="primary" onClick={togglePublishButtonHandler}>
                        {props.published ? 'Unpublish' : 'Publish'}
                    </Button>
                    <Button variant="outlined" color="primary" onClick={imageButtonHandler}>
                        Image
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default PostCard;
