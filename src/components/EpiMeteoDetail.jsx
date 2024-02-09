import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const EpiMeteoDetail = () => {
  const params = useParams();
  const cityName = params.city;
  const navigate = useNavigate();
  const [weatherDetail, setWeatherDetail] = useState(null);

  const gettingWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=a81f13d4cae38755ae72231cc5618270`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error();
        }
      })
      .then((data) => {
        console.log(data.weather[0].description);
        setWeatherDetail(data);
      })
      .catch((err) => {
        console.log(err);
        navigate("/not-found");
      });
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => gettingWeather, [cityName]);
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={7}>
          {/* sono un'idiota */}
          {cityName && (
            <Card>
              <Card.Body>
                <Card.Title>{weatherDetail.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Com'è: <q>{weatherDetail.weather[0].description}</q>
                </Card.Subtitle>
                <Card.Text>
                  Umidità: {weatherDetail.main.humidity}
                  <br />
                  {/* avevo messo un p ma mi dava un warning manca il loading e qui veramente ci vorrebbe perchè con la mia connessione al momento non vedo neanvhe la card  ma TEMPO SCADUTO*/}
                  Temperatura percepita:{weatherDetail.main.feels_like}
                </Card.Text>
                <Card.Link>Massima: {weatherDetail.main.temp_max}</Card.Link>
                <Card.Link>Minima {weatherDetail.main.temp_min}</Card.Link>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default EpiMeteoDetail;
