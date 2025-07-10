import { NavLink } from "react-router-dom"; // Use react-router-dom instead of react-router
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { useContext } from "react";
import { FaAd, FaCloud, FaHome, FaList, FaPlus, FaTasks } from "react-icons/fa";
// import { bgImg } from "./ontexData";

export function MyAppNav({ theme }) {
  // const { theme } = useContext(bgImg);
  // console.log(theme)
  return (
    <nav className="nav">
      <ul className={theme ? "navulDark" : "navulLight"}>
        <li>
          <NavLink to="/" end>
            <FaHome style={color} size={25}></FaHome>
          </NavLink>
        </li>
        <li>
          <NavLink to="/to-do">
            <FaTasks style={color} size={25}></FaTasks>
          </NavLink>
        </li>
        <li>
          <NavLink to="/weather">
            <FaCloud style={color} size={25}></FaCloud>
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/weather">
            <FaCloud style={color} size={25}></FaCloud>
          </NavLink>
        </li> */}
        {/* <li>
          <NavLink style={color} to="/weather">
            {" "}
            <FaCloud style={color} size={25}></FaCloud>
          </NavLink>
        </li>
        <li>
          <NavLink to="/weather">
            {" "}
            <FaCloud style={color} size={25}></FaCloud>
          </NavLink>
        </li>
        <li>
          <NavLink to="/weather">
            {" "}
            <FaCloud style={color} size={25}></FaCloud>
          </NavLink>
        </li>
        <li>
          <NavLink to="/weather">
            <FaPlus style={color} size={25}></FaPlus>
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
}
const color = {
  color: "white",
};
