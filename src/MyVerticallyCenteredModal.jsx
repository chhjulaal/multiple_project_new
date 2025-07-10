import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./ModalStyle.css"; // custom CSS
import { NavLink, Outlet } from "react-router";
import { useState } from "react";
import General from "./General";
import Datetimes from "./Datetimes";
import Background from "./Background";
import { FaImage, FaRegCalendar, FaSlidersH } from "react-icons/fa";
import { useContext } from "react";
import { bgImg } from "./ontexData";
import StarRating from "./StarRating";
export default function MyVerticallyCenteredModal(props) {
  // console.log(props);
  const [renderComponent, setRenderComponent] = useState(1);
  const { theme } = useContext(bgImg);
  // console.log(theme)
  const borderEffect1 =
    renderComponent == 1
      ? {
          // border: "1px solid red",
          display: "flex",
          alignItems: "center",
          width: "150px",
          margin: " 6px 0px",
          justifyContent: "start",
          padding: "10px 15px ",
          borderRadius: "50px",
          color: "rgb(229 229 229)",
          background: "#f5f5f533",
        }
      : {};
  const borderEffect2 =
    renderComponent == 2
      ? {
          // border: "1px solid black",
          display: "flex",
          alignItems: "center",
          width: "150px",
          margin: " 6px 0px",
          justifyContent: "start",
          padding: "10px 15px ",
          borderRadius: "50px",
          background: "#f5f5f533",
          color: "rgb(229 229 229)",
        }
      : {};
  const borderEffect3 =
    renderComponent == 3
      ? {
          // border: "1px solid black",
          display: "flex",
          alignItems: "center",
          width: "150px",
          margin: " 6px 0px",
          justifyContent: "start",
          padding: "10px 15px ",
          borderRadius: "50px",
          background: "#f5f5f533",
          color: "rgb(229 229 229)",
        }
      : {};

  const u = {
    display: "flex",
    alignItems: "center",
    width: "150px",
    margin: " 6px 0px",
    justifyContent: "start",
    padding: "10px 15px ",
    // Background: "#f5f5f533",
  };

  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName={theme ? "custom-modalDark" : "custom-modalLight"}
    >
      <Modal.Header className="modal-header-custom">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <p className="fs-5">Settings</p>
          <p onClick={props.onHide}>Close</p>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div style={{ display: "flex" }}>
          <div style={{ width: "180px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "auto",
                position: "relative",
                top: "-27px",
              }}
            >
              <div
                style={renderComponent == 1 ? borderEffect1 : u}
                onClick={() => setRenderComponent(1)}
              >
                <FaSlidersH
                  size={18}
                  style={{ marginRight: "15px" }}
                ></FaSlidersH>
                <h6 className="mb-0">General</h6>
              </div>
              <div
                style={renderComponent == 2 ? borderEffect2 : u}
                onClick={() => setRenderComponent(2)}
              >
                <FaRegCalendar
                  size={18}
                  style={{ marginRight: "15px" }}
                ></FaRegCalendar>
                <h6 className="mb-0">Date Time</h6>
              </div>
              <div
                style={renderComponent == 3 ? borderEffect3 : u}
                onClick={() => setRenderComponent(3)}
              >
                <FaImage size={18} style={{ marginRight: "15px" }}></FaImage>

                <h6 className="mb-0">Background</h6>
              </div>

              <div
                className="my-4"
                style={{ position: "relative", margin:"0px auto"}}
              >
                <StarRating />
              </div>
            </div>
          </div>

          <div
            style={{
              width: "70%",
              position: "relative",
              top: "-26px",
              maxHeight: "254px",
              overflow: "auto",
              webkitscrollbar: "hiddne",
              scrollbarWidth: "none",
            }}
            className="modelDiv2"
          >
            {renderComponent === 1 ? (
              <General />
            ) : renderComponent === 2 ? (
              <Datetimes />
            ) : renderComponent === 3 ? (
              <Background />
            ) : null}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

const h6 = {
  display: "flex",
  alignItems: "center",
  width: "150px",
  margin: " 6px 0px",
  justifyContent: "start",
  padding: "10px 15px ",
  borderRadius: "50px",
};
