import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css"
import Home from "./router/Home";
import About from "./router/About";
import Contact from "./router/Contact";
import Navigate from "./Navigate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate />}>
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

