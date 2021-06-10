import {
    TextField,
    Card,
    CardContent,
    Button,
    CircularProgress,
    CardActions,
    FormControlLabel,
    Checkbox,
    FormControl,
    Select,
    MenuItem,
    InputLabel,
    FormHelperText,
    Grid,
} from '@material-ui/core';

const NewPostForm = (props) => {


    const formSubmitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <Card variant="outlined" >
                <CardContent>
                    <form noValidate autoComplete="off" onSubmit={formSubmitHandler}>
                        <TextField
                            id="outlined-basic"
                            label="Title"
                            variant="outlined"
                            margin='normal'
                            fullWidth
                        />
                        <TextField
                            id="outlined-basic"
                            label="Description"
                            variant="outlined"
                            margin='normal'
                            multiline
                            fullWidth
                        />
                        <Grid container>
                            <Grid item md={4} sm={12}>
                                <TextField
                                    id="outlined-basic"
                                    label="Reading Time"
                                    variant="outlined"
                                    margin='normal'
                                    type='number'
                                />
                            </Grid>
                            <Grid item md={4} sm={12} >
                                <FormControl variant='outlined'>
                                    <InputLabel id="author-select-label">Author</InputLabel>
                                    <Select
                                        labelId="author-select-label"
                                        id="author-select"
                                        value={'asd'}
                                    // onChange={handleChange}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                    <FormHelperText>Select author for the post.</FormHelperText>
                                </FormControl>
                            </Grid>


                            <Grid item md={4} sm={12}>
                                <FormControl variant='outlined'>
                                    <InputLabel id="category-select-label">Category</InputLabel>
                                    <Select
                                        labelId="category-select-label"
                                        id="category-select"
                                        value={'asd'}
                                    // onChange={handleChange}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                    <FormHelperText>Select author for the post.</FormHelperText>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <div>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={false}
                                        name="publish"
                                        color="primary"
                                    />
                                }
                                label="Publish?"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={false}
                                        name="sendEmail"
                                        color="primary"
                                    />
                                }
                                label="Send Email?"
                            />
                        </div>
                        <TextField
                            id="outlined-basic"
                            label="Email Subject"
                            variant="outlined"
                            margin='normal'
                            fullWidth
                        />
                        <TextField
                            id="outlined-basic"
                            label="Canonical Url"
                            variant="outlined"
                            margin='normal'
                            fullWidth
                        />
                        <TextField
                            id="outlined-basic"
                            label="Code Injection Head"
                            variant="outlined"
                            margin='normal'
                            multiline
                            fullWidth
                        />
                        <TextField
                            id="outlined-basic"
                            label="Code Injection Foot"
                            variant="outlined"
                            margin='normal'
                            multiline
                            fullWidth
                        />
                    </form>
                </CardContent>
                <CardActions>
                    {props.isBusy ? <CircularProgress className='center-horizontal' /> :
                        <Button
                            variant="outlined"
                            color="primary"
                            size='large'
                            type='submit'
                        >
                            Save
                            </Button>}
                </CardActions>
            </Card>
        </div>
    );
}

// "reading_time": 5,
// "author_id": "60998a149c456eacd8f1d3ee", 
// "category_id": "609962b7082f0c4bd4f1c69d", 
// "published": true,
// "codeinjection_head": null,
// "codeinjection_foot": null,
// "canonical_url": null,
// "send_email_when_published": false,
// "email_subject": null

export default NewPostForm;