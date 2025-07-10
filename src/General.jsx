import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import "./General.css";
import { bgImg } from "./ontexData"; 
import { useContext, useEffect } from "react";

function General() {
  const { setShortcut, theme, setTheme } = useContext(bgImg);

  useEffect(() => {
    console.log("Theme changed:", theme);
  }, [theme]);

  return (
    <>
      <div>
        {/* Toggle Shortcuts */}
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

        {/* Theme Switcher */}
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
              value="dark"
              checked={theme === true}
              onChange={() => setTheme(true)}
            />
            Dark
          </label>

          <label style={radioInput}>
            <input
              type="radio"
              name="choice"
              className="me-4"
              value="light"
              checked={theme === false}
              onChange={() => setTheme(false)}
            />
            Light
          </label>

          {/* Optional: System Theme */}
          {/* 
          <label style={radioInput}>
            <input
              type="radio"
              name="choice"
              className="me-4"
              value="system"
              checked={theme === null}
              onChange={() => setTheme(null)}
            />
            System
          </label> 
          */}
        </div>
      </div>
    </>
  );
}

export default General;

const radioInput = {
  display: "flex",
  alignItems: "center",
  marginTop: "8px",
};
