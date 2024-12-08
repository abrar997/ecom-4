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
import AllProducts from "./pages/AllProducts";
import CartProductsContext from "./context/cartContext";
import ProtectedRoute from "./components/ProtectedRoute";
import ProductCategory from "./pages/ProductCategory";

function App() {
  return (
    <div className="font-main">
      <BrowserRouter>
        <AuthenticationContext>
          <ContextProvider>
            <CartProductsContext>
              <div>
                <Routes>
                  {/* public routes */}
                  <Route element={<Login />} path="/login" />
                  <Route element={<SignUp />} path="/signup" />
                  <Route
                    element={<ProductCategory />}
                    path="/category/:category/"
                  />
                  <Route
                    element={<ProductDetails />}
                    path="/product/:productId/"
                  />

                  {/* protected routes */}
                  <Route
                    element={
                      <ProtectedRoute>
                        <Home />
                      </ProtectedRoute>
                    }
                    path="/"
                  />
                  <Route
                    element={
                      <ProtectedRoute>
                        <AllProducts />
                      </ProtectedRoute>
                    }
                    path="/products"
                  />

                  <Route
                    element={
                      <ProtectedRoute>
                        <About />
                      </ProtectedRoute>
                    }
                    path="/about"
                  />
                  <Route
                    element={
                      <ProtectedRoute>
                        <WishList />
                      </ProtectedRoute>
                    }
                    path="/wishlist"
                  />
                  <Route
                    element={
                      <ProtectedRoute>
                        <Cart />
                      </ProtectedRoute>
                    }
                    path="/cart"
                  />
                  <Route
                    element={
                      <ProtectedRoute>
                        <Checkout />
                      </ProtectedRoute>
                    }
                    path="/checkout"
                  />
                  <Route
                    element={
                      <ProtectedRoute>
                        <Account />
                      </ProtectedRoute>
                    }
                    path="/account"
                  />
                  <Route
                    element={
                      <ProtectedRoute>
                        <Contact />
                      </ProtectedRoute>
                    }
                    path="/contact"
                  />
                  <Route element={<NotFound />} path="*" />
                </Routes>
              </div>
            </CartProductsContext>
          </ContextProvider>
        </AuthenticationContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
