import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import ContextProvider from "./context/context";

function App() {
  return (
    <div className="font-main">
      <BrowserRouter>
        <ContextProvider>
          <TopHeader />
          <Header />
          <div>
            <Routes>
              <Route element={<Home />} path="/" index />
            </Routes>
          </div>
        </ContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
