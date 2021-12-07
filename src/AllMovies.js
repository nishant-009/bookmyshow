import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import data from "./movies.json";

function AllMovies() {
    return(
        <div>
            <Container style={{padding: "5%", background: "grey"}}>
                <Row style={{textAlign:"center"}}>
                    {data.map((mov) => 
                        <Col xs={6} md={4} lg={3} style={{paddingBottom: "5%"}}>
                            <Card >
                                <Card.Img  variant="top" src={mov.image} />
                                <Card.Body>
                                    <Card.Title><b>{mov.title}</b></Card.Title>
                                    <Card.Text>{mov.jounar}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    );
}

export default AllMovies;
