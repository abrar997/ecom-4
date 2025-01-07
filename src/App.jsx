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
import ProtectedRoute from "./components/route/ProtectedRoute";
import ProductCategory from "./pages/ProductCategory";
import WishlistContext from "./context/wishlistContext";
import FilteredProducts from "./components/reusable/FilteredProducts";
import Logout from "./pages/Logout";

function App() {
  return (
    <div className="font-main">
      <BrowserRouter>
        <AuthenticationContext>
          <ContextProvider>
            <CartProductsContext>
              <WishlistContext>
                <div>
                  <Routes>
                    {/* public routes */}
                    <Route element={<Login />} path="/login" />
                    <Route element={<SignUp />} path="/signup" />
                    <Route element={<Logout />} path="/logout" />
                    <Route
                      element={<ProtectedRoute component={Home} />}
                      path="/"
                    />
                    <Route
                      element={<ProtectedRoute component={ProductCategory} />}
                      path="/category/:category/"
                    />
                    <Route
                      element={<ProtectedRoute component={ProductCategory} />}
                      path="/category/:category/:categoryChild"
                    />
                    <Route
                      element={<ProtectedRoute component={ProductDetails} />}
                      path="/product/:productId"
                    />
                    <Route
                      element={<ProtectedRoute component={AllProducts} />}
                      path="/products"
                    />
                    <Route
                      element={<ProtectedRoute component={About} />}
                      path="/about"
                    />
                    <Route
                      element={<ProtectedRoute component={WishList} />}
                      path="/wishlist"
                    />
                    <Route
                      element={<ProtectedRoute component={Cart} />}
                      path="/cart"
                    />
                    <Route
                      element={<ProtectedRoute component={Checkout} />}
                      path="/checkout"
                    />
                    <Route
                      element={<ProtectedRoute component={Account} />}
                      path="/account"
                    />
                    <Route
                      element={<ProtectedRoute component={Contact} />}
                      path="/contact"
                    />
                    <Route
                      element={<ProtectedRoute component={FilteredProducts} />}
                      path="/filtered-products"
                    />
                    <Route element={<NotFound />} path="*" />
                  </Routes>
                </div>
              </WishlistContext>
            </CartProductsContext>
          </ContextProvider>
        </AuthenticationContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
