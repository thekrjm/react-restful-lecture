import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { WeatherBox } from "./components/WeatherBox";
import { WeatherButton } from "./components/WeatherButton";
import Cliploader from "react-spinners/ClipLoader";
import ClipLoader from "react-spinners/ClipLoader";

//첫페이지 위치기반 날씨
//날씨 정보에 도시, 화씨 섭씨 날씨상태
//5개의 버튼에 각각 도시배정
//버튼 클릭 할 때마다 도시별 날씨상태가 나옴
//현재 버튼을 누르면 현재위치의 도시 및 날씨정보가 나옴
//로딩스피너

function App() {
  const [wearther, setWeather] = useState(null);
  const [city, setCity] = useState(null);
  const [latLon, setLatLon] = useState([null, null]);
  const [loading, setLoading] = useState(false);
  const cities = ["seoul", "new york", "london", "paris", "dubai"];

  useEffect(() => {
    currentLocation();
  }, []);

  const currentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      setLatLon([lat, lon]);
      // getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async () => {
    const [lat, lon] = latLon;
    const myapi = "237c3548512376c70b2fdcc3c46a4d78";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myapi}&units=metric`;
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  const getWeatherByCity = async () => {
    const myapi = "237c3548512376c70b2fdcc3c46a4d78";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myapi}&units=metric`;
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  // 관심사 = city
  useEffect(() => {
    if (city === null) {
      return;
    }
    getWeatherByCity();
  }, [city]);

  // 관심사 = 위도경도(lat, lon)
  useEffect(() => {
    const [lat, lon] = latLon;
    if (lat === null && lon === null) {
      return;
    }
    getWeatherByCurrentLocation();
  }, [latLon]);

  return (
    <div>
      {loading ? (
        <div className="container">
          <ClipLoader
            color="rgb(131, 231, 238)"
            loading={loading}
            // cssOverride={}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="container">
          <WeatherBox weather={wearther} />
          <WeatherButton
            cities={cities}
            setCity={setCity}
            currentLocation={currentLocation}
          />
        </div>
      )}
    </div>
  );
}

export default App;
