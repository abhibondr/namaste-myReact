{
  /* <div id="parent">
  <div id="child">
    <h2>H2 tag</h2>
  </div>
</div>; */
}

const heading = React.createElement(
  "h2",
  {
    id: "heading",
  },
  "HELLO FROM ABHI🗨"
);

console.log(heading);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement(
      "h2",
      { className: "name", key: "2" },
      "H2 tags in Parent"
    ),
    React.createElement(
      "h3",
      { className: "name", key: "3" },
      "H3 tags in Parent"
    ),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement(
      "h2",
      { className: "name", key: "2" },
      "H2 tags in Parent"
    ),
    React.createElement(
      "h3",
      { className: "name", key: "3" },
      "H3 tags in Parent"
    ),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
