import Nav from "react-bootstrap/Nav";

const EpiMeteoFooter = () => {
  return (
    <Nav
      navigation="true"
      className="flex-column align-items-center justify-content-center p-4 bg-info-subtle"
      data-bs-theme="dark"
      fluid="true"
    >
      <Nav.Item>
        <p className="text-light fw-light m-0">
          <i className="bi bi-c-circle"></i> Lee D {new Date().getFullYear()}
        </p>
      </Nav.Item>
    </Nav>
  );
};

export default EpiMeteoFooter;
