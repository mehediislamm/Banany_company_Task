import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../page/Home/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]
    },
  ]);

  export default router;