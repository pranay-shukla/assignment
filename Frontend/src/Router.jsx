import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";
import ReviewList from "./components/ReviewList";
import CreateNew from "./components/CreateNew.jsx";
import EditReview from "./components/EditReview.jsx";

export default function Router() {
  const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <ReviewList />,
        },
        {
          path: "new",
          element: <CreateNew />,
        },
        {
          path: ":id",
          element: <EditReview />,
        },
      ],
    },
    // { path: "*", element: <NotFound /> },
  ];
  return <RouterProvider router={createBrowserRouter(routes)}></RouterProvider>;
}
