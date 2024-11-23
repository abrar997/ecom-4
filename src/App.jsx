import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";

function App() {
  return (
    <div className="font-main">
      <BrowserRouter>
        <TopHeader />
        <Header />
        <div>
          <Routes>
            <Route element={<Home />} path="/" index />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
