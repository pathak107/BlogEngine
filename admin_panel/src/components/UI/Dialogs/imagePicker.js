import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    DialogContentText,
    TextField,
    CardMedia,
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';

function ImagePicker(props) {
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)
        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const imageUploadHandler = (event) => {
        if (!event.target.files || event.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // first image
        setSelectedFile(event.target.files[0])
    }

    const confirmHandler = () => {
        props.isConfirmed(true);
    };
    const cancelHandler = () => {
        props.isConfirmed(false);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <React.Fragment>
            <Dialog open={props.open} onClose={cancelHandler} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Upload Image</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {props.message}
                    </DialogContentText>
                    <CardMedia
                        image={preview}
                        component="img"
                    />
                    <form encType='multipart/form-data' onSubmit={formSubmitHandler}>
                        <TextField type='file' variant='outlined' onChange={imageUploadHandler} />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={confirmHandler} color="primary">
                        Upload
                    </Button>
                    <Button onClick={cancelHandler} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default ImagePicker;