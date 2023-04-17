import React, { useState } from "react";
import Notes from "./Notes";
import Login from "./Login";

const Home = () => {
  const [alertMessage, setAlertMessage] = useState({});
  if (!localStorage.getItem("token")) {
    return <Login />;
  }
  const alertTag = ["success", "danger"];

  return (
    <div className="container">
      {/* <img src={Notes1} className="position-fixed top-0 start-0 z-0" /> */}
      {Object.entries(alertMessage).length !== 0 && (
        <div
          className={`p-1 position-fixed start-0 alert alert-${alertTag[1]}`}
          role="alert"
          style={{
            top: "60px",
            width: "100%",
            // height:"2%"
          }}
        >
          {/* {alertMessage.message} */}
        </div>
      )}
      <div className="my-5">
        <Notes />
      </div>
    </div>
  );
};

export default Home;
