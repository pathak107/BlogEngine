import { Card, CardContent, CardActions, Button } from '@material-ui/core';
const PostCard = (props) => {
    return (
        <div>
            <Card variant='outlined'>
                <CardContent>
                    <h3>{props.title}</h3>
                    <p>{props.description} </p>
                </CardContent>
                <CardActions>
                    <Button variant="outlined" color="primary">
                        Edit
                        </Button>
                    <Button variant="outlined" color="primary">
                        Delete
                        </Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default PostCard;
