import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import SingleBlog from "../pages/Blog/SingleBlog/SingleBlog";
import Listing from "../pages/Listing/Listing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/single-blog",
        element: <SingleBlog />,
      },
      {
        path: "/listing",
        element: <Listing />,
      },
    ],
  },
]);
const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default AppRouter;
