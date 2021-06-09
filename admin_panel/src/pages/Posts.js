import { Grid, Container } from '@material-ui/core';
import CreateNewPostButton from '../components/CreateNewPostButton/CreateNewPostButton';
import MainHeader from '../components/MainHeader/MainHeader';
import PostCard from '../components/PostCard/PostCard';
const Posts = () => {
    return (
        <div>
            <MainHeader />
            <Container>
                <CreateNewPostButton/>
                <h2>All Posts</h2>
                <Grid container spacing={3}>
                    <Grid item md={4}>
                        <PostCard
                            title='Title of the post with big ass text.'
                            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac diam non quam sollicitudin ornare vel vestibulum ligula. Proin porttitor felis nec odio congue, id volutpat lectus hendrerit. Phasellus vitae convallis eros, interdum dictum justo. Curabitur pellentesque felis quis nisl ornare, nec rutrum elit dictum. Donec in mollis ipsum, ac aliquam urna.'
                        />
                    </Grid>
                    <Grid item md={4}>
                        <PostCard
                            title='Title of the post with big ass text.'
                            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac diam non quam sollicitudin ornare vel vestibulum ligula. Proin porttitor felis nec odio congue, id volutpat lectus hendrerit. Phasellus vitae convallis eros, interdum dictum justo. Curabitur pellentesque felis quis nisl ornare, nec rutrum elit dictum. Donec in mollis ipsum, ac aliquam urna.'
                        />
                    </Grid>
                    <Grid item md={4}>
                        <PostCard
                            title='Title of the post with big ass text.'
                            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac diam non quam sollicitudin ornare vel vestibulum ligula. Proin porttitor felis nec odio congue, id volutpat lectus hendrerit. Phasellus vitae convallis eros, interdum dictum justo. Curabitur pellentesque felis quis nisl ornare, nec rutrum elit dictum. Donec in mollis ipsum, ac aliquam urna.'
                        />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Posts;