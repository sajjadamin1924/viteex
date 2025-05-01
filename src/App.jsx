import "./App.css";
import Signin from "./auth/Signin";
import Signup from "./auth/Signup";
import Main from "./pages/main/Main";
import Mainbra from "./pages/mainbra/Mainbra";
import Moreview from "./pages/moreview/Moreview";
import Mycart from "./pages/mycart/Mycart";
import Payments from "./pages/payments/Payments";
import Productpage from "./pages/productpage/Productpage";
import Singleproduct from "./pages/singleproduct/Singleproduct";
import Checkout from "./pages/checkout/Checkout";
import Aboutus from "./pages/aboutus/Aboutus";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route
            path="/main"
            element={
              <PrivateRoute>
                <Main />
              </PrivateRoute>
            }
          />
          <Route
            path="/mainbra"
            element={
              <PrivateRoute>
                <Mainbra />
              </PrivateRoute>
            }
          />
          <Route
            path="/moreview"
            element={
              <PrivateRoute>
                <Moreview />
              </PrivateRoute>
            }
          />
          <Route
            path="/mycart"
            element={
              <PrivateRoute>
                <Mycart />
              </PrivateRoute>
            }
          />
          <Route
            path="/payments"
            element={
              <PrivateRoute>
                <Payments />
              </PrivateRoute>
            }
          />
          <Route
            path="/productpage"
            element={
              <PrivateRoute>
                <Productpage />
              </PrivateRoute>
            }
          />
          <Route
            path="/singleproduct"
            element={
              <PrivateRoute>
                <Singleproduct />
              </PrivateRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route
            path="/aboutus"
            element={
              <PrivateRoute>
                <Aboutus />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
