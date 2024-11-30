import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ContextProvider from "./context/context";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Account from "./pages/Account";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import AuthenticationContext from "./context/authContext";

function App() {
  return (
    <div className="font-main">
      <BrowserRouter>
        <AuthenticationContext>
          <ContextProvider>
            <div>
              <Routes>
                <Route element={<Home />} path="/" index />
                <Route element={<ProductDetails />} path="/:productId/" />
                <Route element={<About />} path="/about" />
                <Route element={<SignUp />} path="/signup" />
                <Route element={<Login />} path="/login" />
                <Route element={<WishList />} path="/wishlist" />
                <Route element={<Cart />} path="/cart" />
                <Route element={<Checkout />} path="/checkout" />
                <Route element={<Account />} path="/account" />
                <Route element={<Contact />} path="/contact" />
                <Route element={<NotFound />} path="*" />
              </Routes>
            </div>
          </ContextProvider>
        </AuthenticationContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
