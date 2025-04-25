import "./App.css";
import Signin from "./auth/Signin";
import Signup from "./auth/Signup"
import Main from "./pages/main/Main";
import Mainbra from "./pages/mainbra/Mainbra";
import Moreview from "./pages/moreview/Moreview";
import Mycart from "./pages/mycart/Mycart";
import Payments from "./pages/payments/Payments";
import Productpage from "./pages/productpage/Productpage";
import Singleproduct from "./pages/singleproduct/Singleproduct";
import Checkout from "./pages/checkout/Checkout";
import Aboutus from "./pages/aboutus/Aboutus"
import {BrowserRouter, Routes ,Route} from "react-router-dom";


function App() {
  

  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path = "/" element = {<Signup />} />
      <Route path = "/signin" element = {<Signin />} />
      <Route path = "/main" element = {<Main />} />
      <Route path = "/mainbra" element = {<Mainbra />} />
      <Route path = "/moreview" element = {<Moreview />} />
      <Route path = "/mycart" element = {<Mycart />} />
      <Route path = "/payments" element = {<Payments />} />
      <Route path = "/productpage" element = {<Productpage />} />
      <Route path = "/singleproduct" element = {<Singleproduct />} />
      <Route path = "/checkout" element = {<Checkout />} />
      <Route path = "/aboutus" element = {<Aboutus />} />

    
      </Routes>
     
     </BrowserRouter>

    
    
     

    </>
  );
}

export default App;
