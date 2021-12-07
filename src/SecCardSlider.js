import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";


function SecCardSlider() {
  return (
    <div style={{padding: "100px", backgroundColor: "rgb(43, 49, 72)"}}>
       
       <div className="top-img" style={{paddingLeft: "90px", paddingBottom: "40px"}}>
            <img src="./assets/premiertop.png" />
       </div>

       <div className="UpperText" style={{paddingBottom:"10px", color: "white"}}>
            <p style={{fontSize: "2rem"}}>Premieres <br /> Brand new releases every Friday</p>
       </div>
       
       
        <Carousel variant="dark">
     
                <Carousel.Item>
                <CardGroup style={{ display: "flex",gap: "30px", justifyContent: "space-around"}}>
                    <Card className="bg-dark text-white" style={{ height: "600px", width: "300px" }}>
                        <Card.Img src="./assets/premier1.jpg"  alt="Card image"/>
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            {/* <Card.Text>
                            This is a wider card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                            </Card.Text> 
                            <Card.Text>Last updated 3 mins ago</Card.Text>*/}
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white" style={{ height: "600px", width: "200px" }}>
                        <Card.Img src="./assets/premier2.jpg" alt="Card image"/>
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                {/* <Card.Text>
                                This is a wider card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                                </Card.Text> 
                                <Card.Text>Last updated 3 mins ago</Card.Text>*/}
                            </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white" style={{ height: "600px", width: "200px" }}>
                        <Card.Img src="./assets/premier3.jpg" alt="Card image"/>
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                {/* <Card.Text>
                                This is a wider card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                                </Card.Text> 
                                <Card.Text>Last updated 3 mins ago</Card.Text>*/}
                            </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white" style={{ height: "600px", width: "200px" }}>
                        <Card.Img src="./assets/premier4.jpg" alt="Card image"/>
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                {/* <Card.Text>
                                This is a wider card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                                </Card.Text> 
                                <Card.Text>Last updated 3 mins ago</Card.Text>*/}
                            </Card.ImgOverlay>
                    </Card>
                </CardGroup>
                </Carousel.Item>
            </Carousel>
    </div>
    );
}

export default SecCardSlider;
