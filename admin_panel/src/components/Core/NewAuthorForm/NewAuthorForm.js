import React from "react";
import {
    TextField,
} from '@material-ui/core';

const NewAuthorForm = () => {
    return (
        <React.Fragment>
            <TextField
                autoFocus
                variant='outlined'
                margin="dense"
                id="name"
                label="Name"
                fullWidth
            />
            <TextField
                variant='outlined'
                margin="dense"
                id="bio"
                label="Bio"
                fullWidth
            />
            <TextField
                variant='outlined'
                margin="dense"
                id="insta"
                label="Instagram"
                fullWidth
            />
            <TextField
                variant='outlined'
                margin="dense"
                id="fb"
                label="Facebook"
                fullWidth
            />
            <TextField
                variant='outlined'
                margin="dense"
                id="twiter"
                label="Twitter"
                fullWidth
            />
            <TextField
                variant='outlined'
                margin="dense"
                id="url"
                label="Website"
                fullWidth
            />
        </React.Fragment>
    );
}

export default NewAuthorForm;