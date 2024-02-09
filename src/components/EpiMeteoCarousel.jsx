import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import FormSelectCity from "./FormSelectCity";

const EpiMeteoCarousel = () => {
  return (
    <Container>
      <Row className="justify-content-center align-items-center mt-5 g-3">
        <Col lg={7}>
          <Carousel controls={false}>
            <Carousel.Item>
              <img
                src="https://img.freepik.com/premium-photo/city-berlin-germany_700955-1825.jpg"
                alt="Berlin"
                fluid="true"
                style={{ height: 450 }}
              />
              <Carousel.Caption>
                <h3>Berlin</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://images.prismic.io/perlan/046cecbc-1bb8-4065-b249-73bbc226fa1e_13439-157-2613.png?auto=compress%2Cformat&fit=max&w=3840"
                alt="Reykjavik"
                fluid="true"
                style={{ height: 450 }}
              />
              <Carousel.Caption>
                <h3>Reykjavik</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/44/Plaza_Mayor_de_Madrid_06.jpg"
                alt="Madrid"
                fluid="true"
                style={{ height: 450 }}
              />
              <Carousel.Caption>
                <h3>Madrid</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://londonnewsonline.co.uk/wp-content/uploads/2022/11/image-from-rawpixel-id-3303393-jpeg-scaled.jpg"
                alt="London"
                fluid="true"
                style={{ height: 450 }}
              />
              <Carousel.Caption>
                <h3>London</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://live.staticflickr.com/2463/3598596311_84211f2566_b.jpg"
                alt="Paris"
                style={{ height: 450 }}
                fluid="true"
              />
              <Carousel.Caption>
                <h3>Paris</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://live.staticflickr.com/7613/16528182724_9ab9b19bf0_b.jpg"
                alt="Rome"
                style={{ height: 450 }}
                fluid="true"
              />
              <Carousel.Caption>
                <h3>Rome</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <FormSelectCity />
      </Row>
    </Container>
  );
};
export default EpiMeteoCarousel;
