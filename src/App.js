import React from "react";
import Register from "./components/register/Register";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={myRouter}></RouterProvider>
    </div>
  );
};

export default App;
