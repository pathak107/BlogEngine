import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    DialogContentText
} from '@material-ui/core';
import React from 'react';

function ConfirmationDialog(props) {
    const confirmHandler = () => {
        props.isConfirmed(true);
    };
    const cancelHandler=()=>{
        props.isConfirmed(false);
    }


    return (
        <React.Fragment>
            <Dialog open={props.open} onClose={cancelHandler} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Are you sure?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {props.message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={confirmHandler} color="primary">
                        Yes, Sure
                    </Button>
                    <Button onClick={cancelHandler} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default ConfirmationDialog;