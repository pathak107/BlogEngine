import { Card, Button, Col } from 'react-bootstrap'
import Image from 'next/image'
const ArticleCard = (props) => {
    console.log(process.env.NEXT_PUBLIC_BACKEND_URL + props.feature_image)
    return (
        <Col>
            <Card border='dark'>
                <div>
                    <Image
                        src={process.env.NEXT_PUBLIC_BACKEND_URL + props.feature_image}
                        width={500}
                        height={200}
                        alt={props.title}
                    />
                </div>

                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <Button variant="outline-dark">Read More...</Button>
                </Card.Body>
            </Card>
        </Col>

    );
}

export default ArticleCard;