import Alert from "react-bootstrap/Alert";
const WelcomeStatement = () => {
  return (
    <Alert
      className="text-center fw-medium fst-italic fs-3 border-4 border-primary-subtle rounded-0 m-0"
      variant="primary"
    >
      EPIMETEO: che tempo fa oggi a...
    </Alert>
  );
};
export default WelcomeStatement;
