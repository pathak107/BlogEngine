import { TextField, Card, CardContent, Grid } from '@material-ui/core';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown'

const Editor = () => {
    const [htmlFromMarkdown, sethtmlFromMarkdown] = useState(null);
    const convertMarkToHtml = (event) => {
        sethtmlFromMarkdown(event.target.value);
    }
    return (
        <div>
            <Grid container spacing={1}>
                <Grid item md={6}>
                    <form noValidate autoComplete="off">
                        <TextField
                            id="outlined-textarea"
                            label="Markdown"
                            placeholder="Type some markdown here..."
                            multiline
                            variant="outlined"
                            fullWidth
                            onChange={ convertMarkToHtml }
                        />
                    </form>
                </Grid>
                <Grid item md={6}>
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