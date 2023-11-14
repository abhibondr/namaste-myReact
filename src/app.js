import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import ContactPage from "./components/Contact";
import Error from "./components/Error";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

// Practice
// const heading = React.createElement(
//   "h2",
//   {
//     id: "heading",
//   },
//   "HELLO FROM ABHI🗨"
// );

// console.log(heading);

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement(
//       "h2",
//       { className: "name", key: "2" },
//       "H2 tags in Parent"
//     ),
//     React.createElement(
//       "h3",
//       { className: "name", key: "3" },
//       "My tags in Parent"
//     ),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement(
//       "h2",
//       { className: "name", key: "2" },
//       "This is React 🚀💻"
//     ),
//     React.createElement(
//       "h3",
//       { className: "name", key: "3" },
//       "Get to know about so many new things🗨"
//     ),
//   ]),
// ]);
