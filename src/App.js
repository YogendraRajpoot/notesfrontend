import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Notes1 from "./assets/notes1.jpg";
import Notes2 from "./assets/notes2.jpg";
import Notes3 from "./assets/notes3.avif";

function App() {
  const HEIGHT = window.innerHeight;
  return (
    <>
      <NoteState>
        <Router>
          <div
          // style={{
          //   backgroundImage: `url(${Notes1}) `,
          //   backgroundSize: "contain",
          //   backgroundRepeat: "no-repeat",
          //   backgroundPosition: "center",
          //   // height: `${window.innerHeight}`,
          //   height: `${HEIGHT}px`,
          // }}
          >
            <Navbar />
            {/* <img src={Notes1} className="position-fixed" /> */}
            <div className="">
              <Routes>
                <Route exact path="/" Component={Home} />
                <Route exact path="/about" Component={About} />
                <Route exact path="/login" Component={Login} />
                <Route exact path="/signup" Component={Signup} />
              </Routes>
            </div>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
