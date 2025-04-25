
import Signin from "../auth/Signin";
import Signup from "../auth/Signup";
import Aboutus from "../pages/aboutus/Aboutus";
import Checkout from "../pages/checkout/Checkout";
import Main from "../pages/main/Main";
import Mainbra from "../pages/mainbra/Mainbra";
import Moreview from "../pages/moreview/Moreview";
import Mycart from "../pages/mycart/Mycart";
import Payments from "../pages/payments/Payments";
import Productpage from "../pages/productpage/Productpage";
import Singleproduct from "../pages/singleproduct/Singleproduct";

  const publicRoutes = [
    {
    path:"/" ,
    Component: <Signup />,
  },
  {
    path:"/signin",
    Component: <Signin />
  }
]

const privateRoutes = [

    {
        path:"/main",
        Component: <Main /> 
    },
    {
        path:"/mainbra",
        Component: <Mainbra /> 
    },
    {
        path:"/moreview",
        Component: <Moreview /> 
    },
    {
        path:"/mycart",
        Component: <Mycart /> 
    },
    { 
        path:"/payments",
        Component: <Payments /> 
    },
    {
        path:"/singleproduct",
        Component: <Singleproduct /> 
    },
    {
        path:"/productpage",
        Component:<Productpage />
    },
    {
        path:"/checkout",
        Component:<Checkout />
    },
    {
        path:"/aboutus",
        Component:<Aboutus />
    },
]

export default {publicRoutes ,privateRoutes};