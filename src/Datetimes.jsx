import { useContext } from "react";
import { bgImg } from "./ontexData";

function Datetimes() {
  let {
    time12Hour,
    time24Hour,
    setTimes,
    setCurrentDate,
    currentDateMonthwise,
  } = useContext(bgImg);
  return (
    <>
      <div>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <div>
              <span>Date Format</span>
            </div>
            <label style={radioInput}>
              <input
                type="radio"
                name="choic"
                className="me-4"
                defaultChecked
                onChange={() => setCurrentDate(true)}
                style={{ width: "18px", height: "18px" }}
              />
              Default({currentDateMonthwise})
            </label>

            <label style={radioInput}>
              <input
                type="radio"
                name="choic"
                className="me-4"
                onChange={() => setCurrentDate(true)}
                style={{ width: "18px", height: "18px", background: "#e5e7eb" }}
              />
              DD.MM.YYYY
            </label>
            <label style={radioInput}>
              <input
                type="radio"
                name="choic"
                className="me-4"
                onChange={() => setCurrentDate(false)}
                style={{ width: "18px", height: "18px" }}
              />
              MM/DD/YYYY
            </label>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <div className="mt-3">
              <span>Time Format</span>
            </div>
            <label style={radioInput}>
              <input
                type="radio"
                name="choice"
                className="me-4"
                style={{ width: "18px", height: "18px" }}
                defaultChecked
                value={time12Hour}
                onChange={() => setTimes(true)}
              />
              Default({time12Hour})
            </label>

            <label style={radioInput}>
              <input
                type="radio"
                name="choice"
                className="me-4"
                style={{ width: "18px", height: "18px" }}
                value={time24Hour}
                onChange={() => setTimes(false)}
              />
              24-hour
            </label>
            <label style={radioInput}>
              <input
                type="radio"
                name="choice"
                className="me-4"
                style={{ width: "18px", height: "18px" }}
                value={time12Hour}
                onChange={() => setTimes(true)}
              />
              12-hour
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Datetimes;

const radioInput = {
  display: "flex",
  alignItems: "center",
  width: "max-content",
};
