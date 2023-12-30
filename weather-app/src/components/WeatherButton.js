import React from "react";
import { Button } from "react-bootstrap";

export const WeatherButton = ({ cities, setCity, currentLocation }) => {
  return (
    <div className="button-wrap">
      <Button
        className="button-item"
        variant="outline-primary"
        onClick={() => currentLocation()}
      >
        current location
      </Button>
      {cities?.map((el, index) => (
        <div>
          <Button
            className="button-item"
            variant="primary"
            key={index}
            onClick={() => setCity(el)}
          >
            {el}
          </Button>
        </div>
      ))}
    </div>
  );
};
