import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function AllMovies() {
    return(
        <div>
            <Container style={{padding: "5%", background: "pink"}}>
                <Row style={{textAlign:"center"}}>
                    <Col xs={6} md={4} lg={3} style={{paddingBottom: "5%"}}>
                    <Card >
                    <Card.Img  variant="top" src="./assets/scroll1.jpg" />
                    <Card.Body>
                        <Card.Title><b>Jhinmma</b></Card.Title>
                        <Card.Text>
                        Comedy/Drama/Family
                        </Card.Text>
                    </Card.Body>
                </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{paddingBottom: "5%"}}>
                    <Card >
                    <Card.Img  variant="top" src="./assets/scroll1.jpg" />
                    <Card.Body>
                        <Card.Title><b>Jhinmma</b></Card.Title>
                        <Card.Text>
                        Comedy/Drama/Family
                        </Card.Text>
                    </Card.Body>
                </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{paddingBottom: "5%"}}>
                    <Card >
                    <Card.Img  variant="top" src="./assets/scroll1.jpg" />
                    <Card.Body>
                        <Card.Title><b>Jhinmma</b></Card.Title>
                        <Card.Text>
                        Comedy/Drama/Family
                        </Card.Text>
                    </Card.Body>
                </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{paddingBottom: "5%"}}>
                    <Card>
                    <Card.Img  variant="top" src="./assets/scroll1.jpg" />
                    <Card.Body>
                        <Card.Title><b>Jhinmma</b></Card.Title>
                        <Card.Text>
                        Comedy/Drama/Family
                        </Card.Text>
                    </Card.Body>
                </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{paddingBottom: "5%"}}>
                    <Card >
                    <Card.Img  variant="top" src="./assets/scroll1.jpg" />
                    <Card.Body>
                        <Card.Title><b>Jhinmma</b></Card.Title>
                        <Card.Text>
                        Comedy/Drama/Family
                        </Card.Text>
                    </Card.Body>
                </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{paddingBottom: "5%"}}>
                    <Card >
                    <Card.Img  variant="top" src="./assets/scroll1.jpg" />
                    <Card.Body>
                        <Card.Title><b>Jhinmma</b></Card.Title>
                        <Card.Text>
                        Comedy/Drama/Family
                        </Card.Text>
                    </Card.Body>
                </Card>
                    </Col>
                </Row>
            </Container>
        </div>
        
    );
}

export default AllMovies;