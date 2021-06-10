import { Card, CardContent, Button } from '@material-ui/core';
const CreateNewButton = (props) => {
    return (
        <div>
            <Card variant='outlined'>
                <CardContent>
                    <h3>{props.title}</h3>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={props.onClick}>
                        Create New
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
 
export default CreateNewButton;