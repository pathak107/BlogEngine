import { Card, CardContent, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
const HomePage = () => {
    return (
        <div>
            <Container maxWidth='sm'>
                <Link to='/post/create'>
                    <Card variant='outlined'>
                        <CardContent>
                            Create New Post
                    </CardContent>
                    </Card>
                </Link>

                <Card variant='outlined'>
                    <CardContent>
                        Create New Post
                    </CardContent>
                </Card>
                <Card variant='outlined'>
                    <CardContent>
                        Create New Post
                    </CardContent>
                </Card>
                <Card variant='outlined'>
                    <CardContent>
                        Create New Post
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
}

export default HomePage;