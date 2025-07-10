import { useEffect, useState } from "react";
import Drawer from "./Drawer";
import { MyAppNav } from "./Navbar";
import { NavLink, Outlet } from "react-router-dom";
import { bgImg } from "./ontexData";
// import { useContext } from "react";

import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";
import {
  FaAd,
  FaSearch,
  FaTrash,
  FaCheck,
  FaTimesCircle,
  FaCalendar,
  FaCircle,
  FaEdit,
  FaSave,
  FaCog,
  FaGripLines,
  FaGripVertical,
  FaBell,
  FaClock,
  FaHistory,
  FaCalendarCheck,
  FaCriticalRole,
  FaCheckCircle,
} from "react-icons/fa";
import "./Todo.css";
import Modal from "react-bootstrap/Modal";
export function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(null); // holds index, not boolean
  const [updatedTask, setUpdatedTask] = useState("");
  const [shortcut, setShortcut] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [times, setTimes] = useState(true);
  const [currentdDate, setCurrentDate] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [bgImage, setBgImage] = useState("");
  const [randomImg, setRandomImg] = useState("");
  const [draggedItemIndex, setDraggedItemIndex] = useState(null);

  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? JSON.parse(storedTheme) : true;
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const handleDragStart = (index) => {
    setDraggedItemIndex(index);
  };

  const handleDrop = (index) => {
    const newItems = [...tasks];
    const draggedItem = newItems[draggedItemIndex];
    newItems.splice(draggedItemIndex, 1);
    newItems.splice(index, 0, draggedItem);
    setTasks(newItems);
    setDraggedItemIndex(null);
  };

  useEffect(() => {
    const storedData = localStorage.getItem("data");
    if (storedData) {
      setTasks(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(tasks));
  }, [tasks]);

  const getData = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { taskText: task, isCompleted: false }]);
    setTask("");
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  //  Date and the Time
  let date = new Date();
  const today = new Date();

  const currentDateMonthwise = `${String(today.getMonth() + 1).padStart(
    2,
    "0"
  )}/${String(today.getDate()).padStart(2, "0")}/${today.getFullYear()}`;

  // DD/MM/YYYY
  const currentDateDaywise = `${String(today.getDate()).padStart(
    2,
    "0"
  )}/${String(today.getMonth() + 1).padStart(2, "0")}/${today.getFullYear()}`;
  // console.log(currentDateDaywise, currentDateMonthwise);
  let time12Hour = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  let time24Hour = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  // console.log(time24Hour, time12Hour);
  const images = [
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e", // Lake & mountains at sunset
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb", // Forest path with sunlight
    "https://images.unsplash.com/photo-1502082553048-f009c37129b9", // Waterfall in green forest
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470", // Mountain and forest landscape
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb", // Misty forest in morning light
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", // Tree in bloom, blue sky
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8NGslMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000", // Calm river with trees
    "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg", // Field with golden hour light
    "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
    ,
    "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg", // Field with golden hour light
    ,
  ];

  // model showshow:
  useEffect(() => {
    const random = Math.floor(Math.random() * images.length);
    const selected = images[random];

    // console.log(random);
    setRandomImg(selected);
    setBgImage(selected);
  }, []);

  const deleteTask = (deleteIndex) => {
    const filtered = tasks.filter((_, index) => deleteIndex !== index);
    setTasks(filtered);
  };

  const markTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isCompleted = !updatedTasks[index].isCompleted;
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    setIsEditing(index);
    setUpdatedTask(tasks[index].taskText);
  };

  const handleUpdate = (index) => {
    if (updatedTask.trim() === "") return;
    const updatedTasks = [...tasks];
    updatedTasks[index].taskText = updatedTask;
    setTasks(updatedTasks);
    setIsEditing(null);
    setUpdatedTask("");
  };

  const t = modalShow ? { filter: "blur(3px)" } : {};
  // console.log(bgImage);
  // Shortcut on off
  return (
    <>
      <div
        className="todo-container"
        style={{ backgroundImage: `url(${bgImage})`, ...t }}
      >
        {/* {shortcut ? <MyAppNav theme={theme} /> : ""} */}
        <div className={theme ? "box-containerDark" : "box-containerLight"}>
          <div>
            {times ? (
              <p
                className="m-0"
                style={{
                  fontSize: "17.5px",
                  width: "100px",
                  textAlign: "center",
                }}
              >
                {time12Hour}
              </p>
            ) : (
              <p
                className="m-0"
                style={{
                  fontSize: "17.5px",
                  width: "100px",
                  textAlign: "center",
                }}
              >
                {time24Hour}
              </p>
            )}

            {currentdDate ? (
              <p
                className="m-0"
                style={{ fontSize: "13px", textAlign: "center" }}
              >
                {currentDateMonthwise}
              </p>
            ) : (
              <p
                className="m-0"
                style={{ fontSize: "13px", textAlign: "center" }}
              >
                {currentDateDaywise}
              </p>
            )}
          </div>
          <div className={theme ? "searchDivDark" : "searchDivLight"}>
            <label htmlFor="searchInp" style={{ margin: "0px 10px" }}>
              <FaSearch />
            </label>
            <input
              placeholder="Web Search"
              className={theme ? "searchInpDark" : "searchInpLight"}
              id="searchInp"
            />
          </div>
        </div>

        <div className={theme ? "todoDark" : "todoLight"}>
          <div className="todoDiv">
            <span>Unfinished todos</span>
            <FaHistory onClick={toggleDrawer}></FaHistory>
            <Drawer
              time12Hour={time12Hour}
              setTasks={setTasks}
              markTask={markTask}
              deleteTask={deleteTask}
              tasks={tasks}
              isOpen={isDrawerOpen}
              onClose={toggleDrawer}
            />
          </div>

          <div className="taskDiv">
            {tasks.length > 0 ? (
              tasks.map((item, index) => (
                // ul*********************ul
                <ul
                  key={index}
                  style={{ listStyle: "none", paddingLeft: "0" }}
                  className="taskHover"
                >
                  <li
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span
                        draggable
                        onDragStart={() => handleDragStart(index)}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={() => handleDrop(index)}
                      >
                        <FaGripVertical></FaGripVertical>
                      </span>
                      {!item.isCompleted ? (
                        <FaCircle
                          style={{ padding: "0px 4px", width: "40px" }}
                          onClick={() => markTask(index)}
                        />
                      ) : (
                        <FaCheck
                          style={{
                            padding: "0px 4px",
                            width: "40px",
                            color: "green",
                          }}
                          onClick={() => markTask(index)}
                        />
                      )}

                      {index === isEditing ? (
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <input
                            style={{
                              outline: "none",
                              border: "none",
                              padding: "4px 10px",
                              margin: "0px 10px 0px 0px",
                              borderRadius: "14px",
                              background: "#252332",
                              color: "white",
                            }}
                            placeholder="Update Task"
                            value={updatedTask}
                            onChange={(e) => setUpdatedTask(e.target.value)}
                          />
                          {/* <FaAd size={35} /> */}
                          <button
                            style={styleButton}
                            onClick={() => handleUpdate(index)}
                          >
                            Save
                          </button>
                        </div>
                      ) : item.isCompleted ? (
                        <span
                          style={{
                            padding: "0px 4px",
                            width: "100%",
                            color: "green",
                            textDecoration: "line-through",
                          }}
                          onClick={() => editTask(index)}
                        >
                          {item.taskText}
                        </span>
                      ) : (
                        <span
                          style={{
                            padding: "0px 4px",
                            width: "100%",
                          }}
                          onClick={() => editTask(index)}
                        >
                          {item.taskText}
                        </span>
                      )}
                    </span>

                    <span style={{ display: "flex" }}>
                      <FaTrash
                        style={{
                          padding: "0px 4px",
                          width: "40px",
                          color: "red",
                        }}
                        onClick={() => deleteTask(index)}
                      />
                    </span>
                  </li>
                </ul>
              ))
            ) : (
              <h5 style={{ textAlign: "start", paddingLeft: "14px" }}>
                Add something to do!
              </h5>
            )}
          </div>

          <div className={theme ? "inptodoDark" : "inptodoLight"}>
            <input
              placeholder="Add new todo"
              value={task}
              // style={inpTo}
              className={theme ? "inpToDark" : "inpToLight"}
              onChange={(event) => setTask(event.target.value)}
            />
            <FaCheckCircle onClick={() => getData()} />
          </div>
        </div>
        <div className={theme ? "settingDivDark" : "settingDivLight"}>
          <button onClick={() => setModalShow(true)}>
            <FaCog
              style={{ margin: "-3px 0px 0px 0px", width: "30px" }}
            ></FaCog>
            <span>Settings</span>
          </button>
          <bgImg.Provider
            value={{
              images,
              bgImage,
              setBgImage,
              randomImg,
              setRandomImg,
              time12Hour,
              time24Hour,
              times,
              setTimes,
              setCurrentDate,
              currentdDate,
              currentDateMonthwise,
              setShortcut,
              theme,
              setTheme,
            }}
          >
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </bgImg.Provider>
        </div>
      </div>
    </>
  );
}

// CSS in JS styles

const searchcontainer = {
  width: "60%",
  textAlign: "center",
  marginTop: "10px",
  position: "absolute",
  top: "2%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // background: "#0a0a0a4d",
  background: "#0a0a0a4d",
  padding: "0px 10px",
  borderRadius: "28px",
};

const searchInp = {
  width: "100%",
  outline: "none",
  borderRadius: "28px",
  border: "0",
  padding: "0px 10px",
  background: "#17171780",
  color: "white",
};

// const todo = {
//   background: "#0a0a0a4d",
//   width: "60%",
//   borderRadius: "15px",
//   textAlign: "center",
//   padding: "4px 10px",
//   position: "absolute",
//   top: "105px",
// };

const inptodo = {
  // display: "flex",
  // alignItems: "center",
  // width: "100%",
  // outline: "none",
  // borderRadius: "15px",
  // border: "0",
  // padding: "8px 10px",
  // background: "#f5f5f54d",
  // color: "#171717",
  // margin: "0px 0px 10px 0px",
};

const inpTo = {};
const styleButton = {
  // background: "linear-gradient(135deg, #6e8efb, #a777e3)",
  // background: "rgb(10 10 10 / 81%)",
  background: "white",
  color: "rgb(10 10 10 / 81%)",
  border: "none",
  borderRadius: 10,
  padding: "2px 10px",
  fontWeight: "500",
  cursor: "pointer",
  transition: "all 0.2s",
};
