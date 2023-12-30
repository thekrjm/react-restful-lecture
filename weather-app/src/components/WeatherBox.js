import React from "react";

export const WeatherBox = ({ weather }) => {
  return (
    <div>
      <div className="weather-wrap">
        <div>{weather?.name}</div>
        <div>{`기온: ${Math.floor(weather?.main.temp)}℃ / ${Math.floor(
          weather?.main.temp * 1.8 + 32
        )}℉`}</div>
        <div>{`체감온도: ${Math.floor(
          weather?.main.feels_like
        )}℃ / ${Math.floor(weather?.main.feels_like * 1.8 + 32)}℉`}</div>
        <div>{weather?.weather[0].description}</div>
      </div>
    </div>
  );
};
