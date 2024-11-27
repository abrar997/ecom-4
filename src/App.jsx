import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ContextProvider from "./context/context";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div className="font-main">
      <BrowserRouter>
        <ContextProvider>
          <div>
            <Routes>
              <Route element={<Home />} path="/" index />
              <Route element={<SignUp />} path="/signup" />
              <Route element={<Login />} path="/login" />
              <Route element={<WishList />} path="/wishlist" />
              <Route element={<Cart />} path="/cart" />
              <Route element={<Checkout />} path="/checkout" />
            </Routes>
          </div>
        </ContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
