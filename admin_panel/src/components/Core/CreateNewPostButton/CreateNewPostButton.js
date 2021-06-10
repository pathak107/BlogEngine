import { Card, CardContent, Button } from '@material-ui/core';
import {useHistory} from 'react-router-dom';
const CreateNewPostButton = () => {
    let history= useHistory();
    const clickHandler=()=>{
        history.push('/posts/create');
    }
    return (
        <div>
            <Card variant='outlined'>
                <CardContent>
                    <h3>Want to create a new post?</h3>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={clickHandler}>
                        Create New
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
 
export default CreateNewPostButton;