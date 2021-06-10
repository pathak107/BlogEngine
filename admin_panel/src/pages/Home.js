import { Card, CardContent, Container, Grid } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import MainHeader from '../components/UI/MainHeader/MainHeader';
const HomePage = () => {
    return (
        <React.Fragment>
            <MainHeader/>
            <Container maxWidth='sm'>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Link to='/posts'>
                            <Card variant='outlined'>
                                <CardContent>
                                    <h3>Posts</h3>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                    <Grid item xs={6}>
                        <Link to='/author'>
                            <Card variant='outlined'>
                                <CardContent>
                                    <h3>Authors</h3>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                    <Grid item xs={6}>
                        <Link to='/register'>
                            <Card variant='outlined'>
                                <CardContent>
                                    <h3>Category</h3>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                    <Grid item xs={6}>
                        <Link to='/register'>
                            <Card variant='outlined'>
                                <CardContent>
                                    <h3>Comments</h3>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                    <Grid item xs={6}>
                        <Link to='/register'>
                            <Card variant='outlined'>
                                <CardContent>
                                    <h3>Settings</h3>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                    <Grid item xs={6}>
                        <Link to='/register'>
                            <Card variant='outlined'>
                                <CardContent>
                                    <h3>Logout</h3>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}

export default HomePage;