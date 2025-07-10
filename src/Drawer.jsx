import { useEffect, useState, useContext } from "react";
import "./Drawer.css";
import { FaCircle, FaTrash, FaCheck, FaTimes } from "react-icons/fa";
import { bgImg } from "./ontexData";

const Drawer = ({
  isOpen,
  onClose,
  deleteTask,
  setTasks,
  tasks,
  markTask,
  time12Hour,
  currentDate,
}) => {
  const [data, setData] = useState("");
  useEffect(() => {
    setData(tasks);
  }, [tasks]);
  //   console.log(data);
  const searchTodos = (i) => {
    const filterVal = data.filter((item) =>
      item.taskText.toLowerCase().includes(i.toLowerCase())
    );
    setData(filterVal);
    if (i == "") {
      setData(tasks);
    }
  };

  const { theme } = useContext(bgImg);

  return (
    <div
      className={`drawer ${isOpen ? "open" : ""}`}
      style={theme ? { color: "black" } : { color: "white" }}
    >
      <button
        onClick={onClose}
        style={{ borderRadius: "10px", border: "none", float: "right" }}
      >
        Close
      </button>
      {/* Drawer content goes here */}
      <nav>
        <div style={{ textAlign: "left" }}>
          <span className="mx-3">{time12Hour}</span>
          <span>{currentDate}</span>{" "}
        </div>
        <div>
          <input
            placeholder="Search todos"
            onChange={(e) => searchTodos(e.target.value)}
          />
        </div>
        <div
          style={{
            maxHeight: "125px",
            overflow: "auto",
            scrollbarWidth: "none",
          }}
        >
          {data.length > 0 &&
            data?.map((item, index) => (
              <ul
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {!item.isCompleted ? (
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <FaCircle
                      style={{ marginRight: "10px", width: "40px" }}
                      onClick={() => markTask(index)}
                    ></FaCircle>{" "}
                    <li>{item.taskText}</li>
                  </span>
                ) : (
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <FaCheck
                      style={{
                        marginRight: "10px",
                        width: "40px",
                        color: "green",
                      }}
                      onClick={() => markTask(index)}
                    ></FaCheck>{" "}
                    <li
                      style={{ textDecoration: "line-through", color: "green" }}
                    >
                      {item.taskText}
                    </li>
                  </span>
                )}

                <FaTrash
                  style={{ color: "red", width: "40px" }}
                  onClick={() => deleteTask(index)}
                ></FaTrash>
              </ul>
            ))}
        </div>
      </nav>
    </div>
  );
};

export default Drawer;
