// const heading = React.createElement("h1", { id: "heading" }, "LIST OF FRUITS");

// const li1 = React.createElement('li', {}, 'Apple');
// const li2 = React.createElement('li', {}, 'Mango');
// const li3 = React.createElement('li', {}, 'Banana');
// const ul = React.createElement(
//   "ul",
//   {
//     class: "lists",
//   },
//   [
//     React.createElement("li", {}, "Apple"),
//     React.createElement("li", {}, "Mango"),
//     React.createElement("li", {}, "Banana"),
//   ]
// );

const container = React.createElement("div", { id: "container" }, [
  React.createElement("h1", { id: "heading" }, "LIST OF FRUITS"),
  React.createElement(
    "ul",
    {
      className: "lists",
    },
    [
      React.createElement("li", { key: 1 }, "Apple"),
      React.createElement("li", { key: 2 }, "Mango"),
      React.createElement("li", { key: 3 }, "Banana"),
    ]
  ),
]);
console.log(container);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
