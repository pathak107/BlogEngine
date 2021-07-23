import React from "react";
import {
    TextField,
} from '@material-ui/core';

const NewCategoryForm = () => {
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
                id="desc"
                label="Description"
                fullWidth
            />
            <TextField
                variant='outlined'
                margin="dense"
                id="codeinjection_head"
                label="Codeinjection Head"
                fullWidth
            />
            <TextField
                variant='outlined'
                margin="dense"
                id="codeinjection_foot"
                label="Codeinjection foot"
                fullWidth
            />
            <TextField
                variant='outlined'
                margin="dense"
                id="canonical-url"
                label="Canonical Url"
                fullWidth
            />
        </React.Fragment>
    );
}


export default NewCategoryForm;