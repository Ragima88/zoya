import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import SingleBlog from "../pages/Blog/SingleBlog/SingleBlog";
import Listing from "../pages/Listing/Listing";
import Shop from "../pages/Shop/Shop";
import ShopItem from "../pages/ShopItem/ShopItem";
import Cart from "../components/Cart/Cart";

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
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/shop-item",
        element: <ShopItem />,
      },
      {
        path: "/cart",
        element: <Cart />,
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
