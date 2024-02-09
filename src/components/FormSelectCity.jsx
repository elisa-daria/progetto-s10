import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { Link } from "react-router-dom";

const FormSelectCity = () => {
  const [cityName, setCityName] = useState("Berlin");
  const changeCity = (newCity) => {
    setCityName(newCity);
  };
  return (
    <Col>
      <div className="bg-info-subtle p-4 mb-4" data-bs-theme="dark">
        <h2 className="text-white text-center pb-4">
          Seleziona la città cliccando qui sotto!
        </h2>
        <Form.Select
          aria-label="Select City"
          value={cityName}
          onChange={(e) => {
            changeCity(e.target.value);
          }}
        >
          <option>Berlin</option>
          <option>Reykjavik</option>
          <option>Paris</option>
          <option>Rome</option>
          <option>London</option>
          <option>Madrid</option>
        </Form.Select>
        <Link to={`/detail/${cityName}`} className="btn btn-info mt-3">
          Go to Detail
        </Link>
      </div>
    </Col>
  );
};
export default FormSelectCity;
