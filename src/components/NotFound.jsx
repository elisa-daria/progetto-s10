import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const NotFound = () => {
  return (
    <aside className="container mt-3">
      <Row className="justify-content-center align-items-center h-100">
        <Col xs={8} className="text-center text-danger">
          <h1> Hi Beauty!</h1>
          <p>404 Not Found</p>
          <Image
            fluid
            src="https://placebear.com/g/400/500"
            className="rounded-1"
          ></Image>
        </Col>
      </Row>
    </aside>
  );
};
export default NotFound;
