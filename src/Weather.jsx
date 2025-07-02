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
    cloudyImage,
    clearImage,
  ];
  // random bg img
  const [bgImg, setBgImg] = useState("");
  const [data, setData] = useState([]);
  const [city, setCity] = useState("Bhopal");
  useEffect(() => {
    const random = Math.floor(Math.random() * images.length);
    setBgImg(images[random]);
  }, []);

  // fetching data
  const handeData = async () => {
    // let city = "indore";
    // const url = const city = "Delhi";
    const url = `http://api.weatherapi.com/v1/forecast.json?key=271cfb1c9e8b4ee691684650250207&q=${city}&days=7&aqi=no&alerts=no`;
    try {
      let response = await fetch(url);
      response = await response.json();
      await new Promise((res) => setTimeout(res, 2000));
      console.log(response);
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
    console.log(e);
    setCity(e);
  };
  useEffect(() => {
    handeData();
  }, [city]);
  return (
    <>
      <div
        className="weather-container"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <MyAppNav></MyAppNav>
        {/* Weather Nav */}
        <div className="Nav">
          <div>
            <h3>Weather App</h3>
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
        <div className="main-container">
          <div className="first">
            <div className="one">
              <div className="currentDays">
                <div className="tempDiv">
                  <img src={data?.current?.condition?.icon} />
                  <h2>
                    <b>{data?.current?.temp_c} °C</b>
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
                    margin: " 25px 0px 0px 10px",
                  }}
                >
                  <h6>{data?.location?.localtime}</h6>
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
                      background: "#2361e5",
                      textAlign: "center",
                      margin: "10px 0px",
                      borderRadius: "10px",
                      padding: "10px 0px 0px 0px",
                    }}
                  >
                    <h6>Wind Speed</h6>
                    <h5>{data?.current?.wind_kph}</h5>
                  </div>
                  <div
                    style={{
                      width: "140px",
                      background: "#15a148",
                      textAlign: "center",
                      margin: "10px 0px",
                      borderRadius: "10px",
                      padding: "10px 0px 0px 0px",
                    }}
                  >
                    <h6>Humidity</h6>
                    <h5>{data?.current?.humidity}</h5>
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
                  <h5>heat index</h5>
                  <h5>{data?.current?.heatindex_c}</h5>
                </div>
                <hr></hr>
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                  <h2>{data?.current?.condition?.text}</h2>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <div className="DivDays">
                <div className="Days">
                  <h5>Sunday</h5>
                  <hr></hr>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAdFJREFUeNrt2+1tgzAQBmBGYARGYAQWiNQRMkJGYARGYIRsUEbwX/5lBDa4niMrQpSqYN8d/jikV2oS9YwfwtmoagUAVcmpFEABFEABFGD7pucxz3ODGTAGA5sY91lTCR8iAG5ycDB9NgA4mfqPK/5f7O/USQMETP6DkDrAEDB5sduBBcA1PCDIwt0YuQAGIgBwtXqu1YMLwBACHIaKCQAuyunVgxzAdX9IBSFHgFO3Q263wDqNOAAO2hKvAOzfAhIAt+4/I5n4qZ1kMAAO1LkNC8QWdgA3eYg1rADua7+UDDDFPHlWANftIcHYi3anABgTBVjvFpsQgFfiAJ9HbV8AyCTmNEAke33K3EsHmEq+Bd4ptQkGAYylA7RFA6SyFT6YZ7YPQyzLYG6H2J/HFUABCgK4fc8tpsdM9mffk5OoQw6AA3QYWKX3PGmROhwAZjPg5HniInVIAbD4YzOYzehx0mJ1yACwcI1ZNoPZ1/XJkxatQwkw7mg/PK6aaB0SgJ1GY2MIGhZ7HSoAszNgR9Cw2OsEA6TY+MgAUm18lABJNj5KgCm0YV1dJxSgD21YV9cJBWjdQC/MV+DDyiV19B8mFEABFEABFEABFEABFOB3fgDsHp230RVQOwAAAABJRU5ErkJggg=="
                    style={{ width: "60px" }}
                  />
                  <h6>37.0*C</h6>
                </div>
                <div className="Days">
                  <h5>Sunday</h5>
                  <hr></hr>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAdFJREFUeNrt2+1tgzAQBmBGYARGYAQWiNQRMkJGYARGYIRsUEbwX/5lBDa4niMrQpSqYN8d/jikV2oS9YwfwtmoagUAVcmpFEABFEABFGD7pucxz3ODGTAGA5sY91lTCR8iAG5ycDB9NgA4mfqPK/5f7O/USQMETP6DkDrAEDB5sduBBcA1PCDIwt0YuQAGIgBwtXqu1YMLwBACHIaKCQAuyunVgxzAdX9IBSFHgFO3Q263wDqNOAAO2hKvAOzfAhIAt+4/I5n4qZ1kMAAO1LkNC8QWdgA3eYg1rADua7+UDDDFPHlWANftIcHYi3anABgTBVjvFpsQgFfiAJ9HbV8AyCTmNEAke33K3EsHmEq+Bd4ptQkGAYylA7RFA6SyFT6YZ7YPQyzLYG6H2J/HFUABCgK4fc8tpsdM9mffk5OoQw6AA3QYWKX3PGmROhwAZjPg5HniInVIAbD4YzOYzehx0mJ1yACwcI1ZNoPZ1/XJkxatQwkw7mg/PK6aaB0SgJ1GY2MIGhZ7HSoAszNgR9Cw2OsEA6TY+MgAUm18lABJNj5KgCm0YV1dJxSgD21YV9cJBWjdQC/MV+DDyiV19B8mFEABFEABFEABFEABFOB3fgDsHp230RVQOwAAAABJRU5ErkJggg=="
                    style={{ width: "60px" }}
                  />
                  <h6>37.0*C</h6>
                </div>{" "}
                <div className="Days">
                  <h5>Sunday</h5>
                  <hr></hr>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAdFJREFUeNrt2+1tgzAQBmBGYARGYAQWiNQRMkJGYARGYIRsUEbwX/5lBDa4niMrQpSqYN8d/jikV2oS9YwfwtmoagUAVcmpFEABFEABFGD7pucxz3ODGTAGA5sY91lTCR8iAG5ycDB9NgA4mfqPK/5f7O/USQMETP6DkDrAEDB5sduBBcA1PCDIwt0YuQAGIgBwtXqu1YMLwBACHIaKCQAuyunVgxzAdX9IBSFHgFO3Q263wDqNOAAO2hKvAOzfAhIAt+4/I5n4qZ1kMAAO1LkNC8QWdgA3eYg1rADua7+UDDDFPHlWANftIcHYi3anABgTBVjvFpsQgFfiAJ9HbV8AyCTmNEAke33K3EsHmEq+Bd4ptQkGAYylA7RFA6SyFT6YZ7YPQyzLYG6H2J/HFUABCgK4fc8tpsdM9mffk5OoQw6AA3QYWKX3PGmROhwAZjPg5HniInVIAbD4YzOYzehx0mJ1yACwcI1ZNoPZ1/XJkxatQwkw7mg/PK6aaB0SgJ1GY2MIGhZ7HSoAszNgR9Cw2OsEA6TY+MgAUm18lABJNj5KgCm0YV1dJxSgD21YV9cJBWjdQC/MV+DDyiV19B8mFEABFEABFEABFEABFOB3fgDsHp230RVQOwAAAABJRU5ErkJggg=="
                    style={{ width: "60px" }}
                  />
                  <h6>37.0*C</h6>
                </div>{" "}
              </div>
              <div className="DivDays">
                <div className="Days">
                  <h5>Sunday</h5>
                  <hr></hr>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAdFJREFUeNrt2+1tgzAQBmBGYARGYAQWiNQRMkJGYARGYIRsUEbwX/5lBDa4niMrQpSqYN8d/jikV2oS9YwfwtmoagUAVcmpFEABFEABFGD7pucxz3ODGTAGA5sY91lTCR8iAG5ycDB9NgA4mfqPK/5f7O/USQMETP6DkDrAEDB5sduBBcA1PCDIwt0YuQAGIgBwtXqu1YMLwBACHIaKCQAuyunVgxzAdX9IBSFHgFO3Q263wDqNOAAO2hKvAOzfAhIAt+4/I5n4qZ1kMAAO1LkNC8QWdgA3eYg1rADua7+UDDDFPHlWANftIcHYi3anABgTBVjvFpsQgFfiAJ9HbV8AyCTmNEAke33K3EsHmEq+Bd4ptQkGAYylA7RFA6SyFT6YZ7YPQyzLYG6H2J/HFUABCgK4fc8tpsdM9mffk5OoQw6AA3QYWKX3PGmROhwAZjPg5HniInVIAbD4YzOYzehx0mJ1yACwcI1ZNoPZ1/XJkxatQwkw7mg/PK6aaB0SgJ1GY2MIGhZ7HSoAszNgR9Cw2OsEA6TY+MgAUm18lABJNj5KgCm0YV1dJxSgD21YV9cJBWjdQC/MV+DDyiV19B8mFEABFEABFEABFEABFOB3fgDsHp230RVQOwAAAABJRU5ErkJggg=="
                    style={{ width: "60px" }}
                  />
                  <h6>37.0*C</h6>
                </div>{" "}
                <div className="Days">
                  <h5>Sunday</h5>
                  <hr></hr>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAdFJREFUeNrt2+1tgzAQBmBGYARGYAQWiNQRMkJGYARGYIRsUEbwX/5lBDa4niMrQpSqYN8d/jikV2oS9YwfwtmoagUAVcmpFEABFEABFGD7pucxz3ODGTAGA5sY91lTCR8iAG5ycDB9NgA4mfqPK/5f7O/USQMETP6DkDrAEDB5sduBBcA1PCDIwt0YuQAGIgBwtXqu1YMLwBACHIaKCQAuyunVgxzAdX9IBSFHgFO3Q263wDqNOAAO2hKvAOzfAhIAt+4/I5n4qZ1kMAAO1LkNC8QWdgA3eYg1rADua7+UDDDFPHlWANftIcHYi3anABgTBVjvFpsQgFfiAJ9HbV8AyCTmNEAke33K3EsHmEq+Bd4ptQkGAYylA7RFA6SyFT6YZ7YPQyzLYG6H2J/HFUABCgK4fc8tpsdM9mffk5OoQw6AA3QYWKX3PGmROhwAZjPg5HniInVIAbD4YzOYzehx0mJ1yACwcI1ZNoPZ1/XJkxatQwkw7mg/PK6aaB0SgJ1GY2MIGhZ7HSoAszNgR9Cw2OsEA6TY+MgAUm18lABJNj5KgCm0YV1dJxSgD21YV9cJBWjdQC/MV+DDyiV19B8mFEABFEABFEABFEABFOB3fgDsHp230RVQOwAAAABJRU5ErkJggg=="
                    style={{ width: "60px" }}
                  />
                  <h6>37.0*C</h6>
                </div>{" "}
                <div className="Days">
                  <h5>Sunday</h5>
                  <hr></hr>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAdFJREFUeNrt2+1tgzAQBmBGYARGYAQWiNQRMkJGYARGYIRsUEbwX/5lBDa4niMrQpSqYN8d/jikV2oS9YwfwtmoagUAVcmpFEABFEABFGD7pucxz3ODGTAGA5sY91lTCR8iAG5ycDB9NgA4mfqPK/5f7O/USQMETP6DkDrAEDB5sduBBcA1PCDIwt0YuQAGIgBwtXqu1YMLwBACHIaKCQAuyunVgxzAdX9IBSFHgFO3Q263wDqNOAAO2hKvAOzfAhIAt+4/I5n4qZ1kMAAO1LkNC8QWdgA3eYg1rADua7+UDDDFPHlWANftIcHYi3anABgTBVjvFpsQgFfiAJ9HbV8AyCTmNEAke33K3EsHmEq+Bd4ptQkGAYylA7RFA6SyFT6YZ7YPQyzLYG6H2J/HFUABCgK4fc8tpsdM9mffk5OoQw6AA3QYWKX3PGmROhwAZjPg5HniInVIAbD4YzOYzehx0mJ1yACwcI1ZNoPZ1/XJkxatQwkw7mg/PK6aaB0SgJ1GY2MIGhZ7HSoAszNgR9Cw2OsEA6TY+MgAUm18lABJNj5KgCm0YV1dJxSgD21YV9cJBWjdQC/MV+DDyiV19B8mFEABFEABFEABFEABFOB3fgDsHp230RVQOwAAAABJRU5ErkJggg=="
                    style={{ width: "60px" }}
                  />
                  <h6>37.0*C</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
