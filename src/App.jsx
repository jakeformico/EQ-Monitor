
import './App.css'
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import CreateData from "./components/CreateData";
import EditData from "./components/EditData";
import ListData from "./components/ListData";
function App() {


  return (
    <>
      <p>EQ Monitor Main Page</p>
      <div className={"top-nav-wrapper"}>
        <p>Header</p>
      </div>
      <div className={"content-wrapper"}>
        <div className="body-wrapper">
          <Router>
            <Routes>
              <Route exact path="/" />
              <Route path="/CreateData" element={<CreateData />} />
              <Route path="/EditData" element={<EditData />} />
              
              <Route path="/ListData" element={<ListData />} />

            </Routes>
          </Router>
        </div>

      </div>
    </>
  );
}

export default App;
