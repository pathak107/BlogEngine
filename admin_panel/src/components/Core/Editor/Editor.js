import { TextField, Card, CardContent, Grid } from '@material-ui/core';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown'

const Editor = () => {
    const [htmlFromMarkdown, sethtmlFromMarkdown] = useState(null);
    const convertMarkToHtml = (event) => {
        sethtmlFromMarkdown(event.target.value);
    }
    return (
        <div className='Editor'>
            <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                    <form noValidate autoComplete="off">
                        <TextField
                            id="outlined-textarea"
                            label="Markdown"
                            placeholder="Type some markdown here..."
                            multiline
                            variant="outlined"
                            fullWidth
                            onChange={ convertMarkToHtml }
                            rows={100}
                        />
                    </form>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Card variant="outlined">
                        <CardContent>
                            <ReactMarkdown>
                                {htmlFromMarkdown}
                            </ReactMarkdown>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>

    );
}

export default Editor;