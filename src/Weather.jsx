import { useEffect, useState } from "react";
import { MyAppNav } from "./Navbar";
import "./Weather.css";
import snowImage from "./Weather-BG-images/snow.jpg";
import clearImage from "./Weather-BG-images/Clear.jpg";
import cloudyImage from "./Weather-BG-images/Cloudy.jpg";
import fogImage from "./Weather-BG-images/fog.png";
import rainyImage from "./Weather-BG-images/Rainy.jpg";
import stormyImage from "./Weather-BG-images/Stormy.jpg";
import sunnyImage from "./Weather-BG-images/Sunny.jpg";
import { FaSearch } from "react-icons/fa";

export function Weather() {
  const images = [
    snowImage,
    sunnyImage,
    stormyImage,
    rainyImage,
    fogImage,
    // cloudyImage,
    clearImage,
  ];
  // random bg img
  const [bgImg, setBgImg] = useState("");
  const [data, setData] = useState([]);
  const [city, setCity] = useState("Bhopal");
  const [selectedData, setSelectedData] = useState("");
  const [heatindex, setHeatIndex] = useState("24.5");
  useEffect(() => {
    const random = Math.floor(Math.random() * images.length);
    setBgImg(images[random]);
  }, []);

  // fetching data
  const handeData = async () => {
    // let city = "indore";
    // const url = const city = "Delhi";
    const url = `http://api.weatherapi.com/v1/forecast.json?key=70d26bf169fa47eba6d123127250307&q=${city}&days=7&aqi=yes&alerts=yes`;
    try {
      let response = await fetch(url);
      response = await response.json();
      await new Promise((res) => setTimeout(res, 2000));
      // console.log(response);
      setData(response);
    } catch (error) {
      console.error("Failed to fetch weather data:", error);
    }
  };

  useEffect(() => {
    handeData();
  }, []);

  // city data
  const handelCity = (e) => {
    // console.log(e);
    setCity(e);
  };

  useEffect(() => {
    handeData();
  }, [city]);

  const handelData = (e) => {
    setHeatIndex(data?.forecast?.forecastday[e]?.hour[e]?.heatindex_c);
    setSelectedData(data.forecast.forecastday[e]);
  };
  useEffect(() => {
    console.log(selectedData);
  }, [selectedData]);
  useEffect(() => {
    if (data) {
      setSelectedData(data?.forecast?.forecastday[0]);
    }
  }, [data]);
  return (
    <>
      <div
        className="weather-container"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <MyAppNav></MyAppNav>
        {/* Weather Nav */}
        <div className="Nav">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src="https://cdn-icons-png.flaticon.com/128/9546/9546618.png" style={{width:'45px'}}/>
            <h3 style={{ color: "pink" }}>Weather App</h3>
          </div>
          <div className="SearchInputDiv">
            <FaSearch size={25} className="mx-2"></FaSearch>
            <input
              placeholder="Search City"
              type="text"
              // className="Searchinput"
              style={{ backgroundColor: "#0a0a0a00", color: "black" }}
              value={city}
              onChange={(e) => handelCity(e.target.value)}
            />
          </div>
        </div>

        {/* Main Content of Weather App */}
        {selectedData == undefined ? (
          <div id="preloader">
            <h1>Loading....</h1>
          </div>
        ) : (
          <div className="main-container">
            <div className="first">
              <div className="one">
                <div className="currentDays">
                  <div className="tempDiv">
                    <img src={selectedData?.day?.condition?.icon} />
                    <h2>
                      <b>{selectedData?.day?.maxtemp_c} °C</b>
                    </h2>
                  </div>
                  <div style={{ textAlign: "center", margin: "10px 0px" }}>
                    <h2>
                      <b>{data?.location?.name}</b>
                    </h2>
                    <span>
                      {" "}
                      {data?.location?.region} , {data?.location?.country}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      margin: " 0px 0px 0px 10px",
                    }}
                  >
                    <h6>{selectedData?.date}</h6>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      margin: "10px 0px",
                      gap: "15px",
                    }}
                  >
                    <div
                      style={{
                        width: "140px",
                        // background: "#2361e5",
                        textAlign: "center",
                        margin: "10px 0px",
                        borderRadius: "10px",
                        padding: "10px 0px 0px 0px",
                        // border: "1px solid black",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          margin: "5px",
                        }}
                      >
                        <h6>Wind Speed</h6>
                        <h6>{selectedData?.day?.maxwind_kph}</h6>
                      </div>
                      <img
                        style={{ width: "50px" }}
                        src="https://cdn-icons-png.flaticon.com/128/5532/5532989.png"
                      />
                    </div>
                    <div
                      style={{
                        width: "140px",
                        // background: "#15a148",
                        textAlign: "center",
                        margin: "10px 0px",
                        borderRadius: "10px",
                        padding: "10px 0px 0px 0px",
                        // border: "1px solid black",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          margin: "5px",
                        }}
                      >
                        <h6>Humidity</h6>
                        <h6>{selectedData?.day?.avghumidity}</h6>
                      </div>
                      <img
                        style={{ width: "50px", marginBottom: "21px" }}
                        src="https://cdn-icons-png.flaticon.com/128/13945/13945026.png"
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0px 10px",
                      margin: "10px 0px",
                    }}
                  >
                    <h6>heat index</h6>
                    <h6>{heatindex}</h6>
                  </div>
                  <hr style={{ margin: "4px 0px" }}></hr>
                  <div style={{ textAlign: "center", marginBottom: "0px" }}>
                    <h5>{selectedData?.day?.condition?.text}</h5>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  marginTop: "50px",
                }}
              >
                {data?.forecast?.forecastday?.map((item, index) => (
                  <div
                    className="Days"
                    key={index}
                    onClick={() => handelData(index)}
                  >
                    <h6 style={{ width: "140px", marginTop: "6px" }}>
                      {item.date}
                    </h6>
                    <hr className="m-2"></hr>
                    <img
                      src={item?.day?.condition?.icon}
                      style={{ width: "80px" }}
                    />
                    <hr className="m-2"></hr>

                    <h6>{item?.day?.maxtemp_c}</h6>
                  </div>
                ))}
                <div className="DivDays"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
