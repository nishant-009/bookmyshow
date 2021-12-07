import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "@restart/ui/esm/Button";
import "bootstrap-icons/font/bootstrap-icons.css";


function Footer() {
  return (
    <div style={{backgroundColor: "rgb(51, 51, 56)", color:"white"}}>
        <Container>
           <Row style={{padding: "3%"}}>
               <Col xs={2}>
                   <b>List your show</b>
               </Col>
               <Col xs={8}>
                    <b>Got a show, event, activity or a great experience? Partner with us & get listed on BookMyShow</b>
               </Col>
               <Col xs={2} style={{display:"flex", flexDirection:"row-reverse"}}>
                    <Button style={{background:"rgb(236, 94, 113)"}}>Contact Today!</Button>
               </Col>
           </Row>
           <Row fluid style={{textAlign:"center", padding:"3%", backgroundColor: "rgb(64, 64, 67)"}}>
                <Col>
                <i class="bi bi-people-fill " ></i>
                <p>24 X 7 Customer Care</p>
                </Col>
                <Col>
                <i class="bi bi-ticket-perforated"></i>
                <p>Resend Booking confirmation</p>
                </Col>
                <Col>
                <i class="bi bi-envelope-open"></i>
                <p>Subscribe to the newsletter</p>
                </Col>
           </Row>
           <div className="footercontent" style={{paddingLeft: "500px", paddingTop: "50px"}}>
                <img src="./assets/headerlogo.png" />
           </div>

           <div style={{paddingLeft: "550px", paddingTop: "20px", paddingBottom: "20px"}}>
           <Row>
                    <Col>
                    <i class="bi bi-facebook" style={{padding:"10px"}}></i>
                    
                    <i class="bi bi-twitter" style={{padding:"10px"}}></i>
                    
                    <i class="bi bi-instagram" style={{padding:"10px"}}></i>
                    
                    <i class="bi bi-youtube" style={{padding:"10px"}}></i>
                   
                    <i class="bi bi-pinterest" style={{padding:"10px"}}></i>
                   
                    <i class="bi bi-linkedin" style={{padding:"10px"}}></i>
                    </Col>
                </Row>
           </div>

           <div className="fotterText" >
               <p style={{paddingLeft:"400px"}}>Copyright 2021 @ Bigtree Entertainment Pvt.Ltd. All Right Reserved.</p>
            <p style={{paddingLeft:"250px", paddingBottom:"50px"}}>The contents and images used on this site are copright protetcted and copyrightvests with the respective oweners.</p>
           </div>
        </Container>
      
    </div>
    );
}

export default Footer;
