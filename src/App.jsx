import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" exact element={<HomePage />}></Route>

      </Routes>
     
    </div>
  );
}

export default App;
