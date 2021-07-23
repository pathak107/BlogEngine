import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from '@material-ui/core';
import React from 'react';

function NewAuthor(props) {
    const confirmHandler = () => {
        props.isConfirmed(true);
    };
    const cancelHandler = () => {
        props.isConfirmed(false);
    }


    return (
        <React.Fragment>
            <Dialog open={props.open} onClose={cancelHandler} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
                <DialogContent>
                    {props.children}
                </DialogContent>
                <DialogActions>
                    <Button onClick={confirmHandler} color="primary">
                        Save
                    </Button>
                    <Button onClick={cancelHandler} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default NewAuthor;