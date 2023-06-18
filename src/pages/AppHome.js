import { Carousel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


function AppHome() {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-10">
          <MyAppCarousel />
        </div>
      </div>

      {/** <!--best sellers--> */}
      <div className="row justify-content-center m-3">
        <div className="col-3">
          <h1 className="text-danger">best</h1>
          <h4 className="text-black mx-5">SELLERS</h4>
        </div>
      </div>

      <Mycards />
    </>
  );
}

function Mycards() {
  return (
    <>
      <div className="row">
        <div className="col-md-3 col-sm-12">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="./images/Zulubar2.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 col-sm-12">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="./images/Zulubar2.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 col-sm-12">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="./images/Zulubar2.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 col-sm-12">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="./images/Zulubar2.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
function MyAppCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/Havmor_Tub-Dangler-Website-Banners.gif"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/havmor_banner1.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/Wild_Berry_Cover_home_banner.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/Wild_Berry_Cover_home_banner.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}


export default AppHome;
