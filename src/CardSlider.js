import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Cardslider() {
  return (
    <div style={{padding: "100px"}}>

      <div className="top" style={{fontSize: "2rem", paddingBottom: "10px"}}>
        <b>The Best of Entertainment</b>
      </div>  

      <Carousel variant="dark">
     
          <Carousel.Item>
            <CardGroup style={{ display: "flex",gap: "30px", justifyContent: "space-around"}}>
                <Card className="bg-dark text-white" style={{ height: "300px", width: "300px" }}>
                    <Card.Img src="./assets/fitness-collection-2020081150.png"  alt="Card image"/>
                    <Card.ImgOverlay>
                        <Card.Title></Card.Title>
                        <Card.Text>
                      
                        </Card.Text>
                        <Card.Text></Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Card className="bg-dark text-white" style={{ height: "300px", width: "300px" }}>
                    <Card.Img src="./assets/kids-collection-202007220710.png" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title></Card.Title>
                            <Card.Text>
                            
                            </Card.Text>
                            <Card.Text></Card.Text>
                        </Card.ImgOverlay>
                </Card>
                <Card className="bg-dark text-white" style={{ height: "300px", width: "300px" }}>
                    <Card.Img src="./assets/music-shows-collection-202007220710.png" alt="Card image"/>
                        <Card.ImgOverlay>
                            <Card.Title></Card.Title>
                            <Card.Text>
                           
                            </Card.Text>
                            <Card.Text></Card.Text>
                        </Card.ImgOverlay>
                </Card>
                <Card className="bg-dark text-white" style={{ height: "300px", width: "300px" }}>
                    <Card.Img src="./assets/card1.png" alt="Card image"/>
                        <Card.ImgOverlay>
                            <Card.Title></Card.Title>
                            <Card.Text>
                           
                            </Card.Text>
                            <Card.Text></Card.Text>
                        </Card.ImgOverlay>
                </Card>
            </CardGroup>
          </Carousel.Item>

          <Carousel.Item>
              <CardGroup style={{ display: "flex",gap: "30px", justifyContent: "space-around"}}>
                    <Card className="bg-dark text-white" style={{ height: "300px", width: "300px" }}>
                    <Card.Img src="./assets/card2.png"alt="Card image"/>
                    <Card.ImgOverlay>
                        <Card.Title></Card.Title>
                        <Card.Text>
                       
                        </Card.Text>
                        <Card.Text></Card.Text>
                    </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white" style={{ height: "300px", width: "300px" }}>
                    <Card.Img src="./assets/card3.png" alt="Card image"/>
                    <Card.ImgOverlay>
                        <Card.Title></Card.Title>
                        <Card.Text>
                       
                        </Card.Text>
                        <Card.Text></Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Card className="bg-dark text-white" style={{ height: "300px", width: "300px" }}>
                    <Card.Img src="./assets/card4.png" alt="Card image"/>
                    <Card.ImgOverlay>
                        <Card.Title></Card.Title>
                        <Card.Text>
                       
                        </Card.Text>
                        <Card.Text></Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Card className="bg-dark text-white" style={{ height: "300px", width: "300px" }}>
                    <Card.Img src="./assets/card5.png" alt="Card image"/>
                    <Card.ImgOverlay>
                        <Card.Title></Card.Title>
                        <Card.Text>
                        
                        </Card.Text>
                        <Card.Text></Card.Text>
                    </Card.ImgOverlay>
                </Card>
                </CardGroup>
          </Carousel.Item>

      </Carousel>
    </div>
  );
}

export default Cardslider;
