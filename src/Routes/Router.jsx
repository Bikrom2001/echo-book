import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About";
import ErrorPage from "../Components/ErrorPage";
import Login from "../Components/Login";
import Media from "../Components/Media";
import MediaDetails from "../Components/MediaDetails";
import Registration from "../Components/Registration";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/media",
        element: <Media></Media>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/mediaDetails/:id",
        element: <MediaDetails></MediaDetails>,
        loader: ({ params }) =>
          fetch(
            `https://echo-book-server.vercel.app/mediaDetails/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
