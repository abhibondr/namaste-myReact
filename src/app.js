import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

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
