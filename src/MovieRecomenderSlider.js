import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function MovieRecomenderSlider() {
  return (
    <div style={{padding: "300px", paddingTop: "100px" , paddingBottom: "100px"}}>


        <div className="TopHeading" style={{color: "black", fontSize: "2rem", paddingBottom: "10px"}} >
            <b>Recommended Movies</b>
        </div>
        
        <Carousel>
         <Carousel.Item>
            <CardGroup style={{ display: "flex",gap: "30px",justifyContent: "space-between"}}>
                
                <Card style={{ width: "100px", height: "500px" }}>
                    <Card.Img  variant="top" src="./assets/premier1.jpg" />
                    <Card.Body>
                        <Card.Title> <b>Sooryavanshi</b></Card.Title>
                        <Card.Text>
                       Action/Comedy/Drama
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: "500px" }}>
                    <Card.Img  variant="top" src="./assets/premier2.jpg" />
                    <Card.Body>
                        <Card.Title><b>Satyameva Jayate 2</b></Card.Title>
                        <Card.Text>
                        Action/Drama
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: "500px" }}>
                    <Card.Img  variant="top" src="./assets/premier3.jpg" />
                    <Card.Body>
                        <Card.Title><b>Antim: The Final truth</b></Card.Title>
                        <Card.Text>
                        Action/Crime/Drama
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: "500px" }}>
                    <Card.Img  variant="top" src="./assets/premier4.jpg" />
                    <Card.Body>
                        <Card.Title> <b>Tadap</b></Card.Title>
                        <Card.Text>
                        Action/Romantic/Drama
                        </Card.Text>
                    </Card.Body>
                </Card>                
            </CardGroup>
          </Carousel.Item>

          <Carousel.Item>
            <CardGroup style={{ display: "flex",gap: "30px",justifyContent: "space-between"}}>
                
                <Card style={{ width: "100px", height: "500px" }}>
                    <Card.Img  variant="top" src="./assets/scroll1.jpg" />
                    <Card.Body>
                        <Card.Title><b>Jhinmma</b></Card.Title>
                        <Card.Text>
                        Comedy/Drama/Family
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: "500px" }}>
                    <Card.Img  variant="top" src="./assets/scroll2.jpg" />
                    <Card.Body>
                        <Card.Title><b>Marakkar: Arabikadalinte Simham</b> </Card.Title>
                        <Card.Text>
                        Action/Adventure/Historical/War
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: "500px" }}>
                    <Card.Img  variant="top" src="./assets/scroll3.jpg" />
                    <Card.Body>
                        <Card.Title><b>House Of Gucchi</b></Card.Title>
                        <Card.Text>
                        Biography/Crime/Drama
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: "500px" }}>
                    <Card.Img  variant="top" src="./assets/scroll4.jpg" />
                    <Card.Body>
                        <Card.Title><b>Bunty Or Babli 2</b></Card.Title>
                        <Card.Text>
                        Comedy/Crime
                        </Card.Text>
                    </Card.Body>
                </Card>                
            </CardGroup>
          </Carousel.Item>

        </Carousel>

        



    </div>

           

    );
}

export default MovieRecomenderSlider;
