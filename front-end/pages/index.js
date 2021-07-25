import { Fragment } from 'react';
import Footer from '../Components/Layout/Footer';
import Header from '../Components/Layout/Header';
import { Row, Col, Container } from 'react-bootstrap'

import ArticleCard from '../Components/ArticleCard/ArticleCard';
export default function Home(props) {
  return (
    <Container >
      <Row xs={1} md={3} lg={3} className="g-4">
        {props.posts.map((post) => {
          return (
              <ArticleCard
                key={post._id}
                title={post.title}
                description={post.description}
                feature_image={"/static/uploads/1623169767181.jpeg"}
              />
          )
        })}
      </Row>

    </Container>
  )
}


export async function getStaticProps(context) {
  const data = await (await fetch(process.env.NEXT_PUBLIC_REST_API_URL + '/posts')).json()

  if (!data) {
    return {
      notFound: true,
    }
  }
  console.log(data);
  return {
    props: {
      posts: data.posts
    },
    revalidate: 3600
  }
}

Home.getLayout = (page) => (
  <Fragment>
    <Header />
    {page}
    <Footer />
  </Fragment>
)
