import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import "./General.css";
import { bgImg } from "./ontexData";
import { useContext, useEffect, useState } from "react";

function General() {
  const { setShortcut, theme, setTheme } = useContext(bgImg);
  useEffect(() => {
    // console.log(theme);
  }, [theme]);
  return (
    <>
      <div>
        <div className="mt-1">
          <label
            className="switch me-3"
            onChange={() => setShortcut((prev) => !prev)}
          >
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <span>Show shortcuts</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <div className="mt-4">
            <span>Theme</span>
          </div>
          <label style={radioInput}>
            <input
              type="radio"
              name="choice"
              className="me-4"
              value={theme}
              onChange={() => setTheme(true)}
            />
            Dark
          </label>

          <label style={radioInput}>
            <input
              type="radio"
              name="choice"
              className="me-4"
              onChange={() => setTheme(false)}
              value={theme}
            />
            Light
          </label>
          {/* <label style={radioInput}>
            <input type="radio" name="choice" className="me-4" />
            System
          </label> */}
        </div>
      </div>
    </>
  );
}

export default General;

const radioInput = {
  display: "flex",
  alignItems: "center",
};
