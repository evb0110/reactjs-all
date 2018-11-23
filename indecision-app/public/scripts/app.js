"use strict";

console.log('App.js is running');

var app = {
  title: "Indecision app",
  subtitle: "My first react app",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }
  console.log(option);
  renderAll();
};

var appRoot = document.getElementById('app');

var renderAll = function renderAll() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      "p",
      null,
      app.subtitle
    ),
    React.createElement(
      "p",
      null,
      app.options.length > 0 ? "Options present" : "No options"
    ),
    React.createElement(
      "p",
      null,
      app.options.length
    ),
    React.createElement(
      "button",
      { onClick: removeAll },
      "Remove all"
    ),
    React.createElement(
      "ol",
      null,
      React.createElement(
        "li",
        null,
        "first item"
      ),
      React.createElement(
        "li",
        null,
        "second item"
      )
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

var removeAll = function removeAll() {
  app.options = [];
  renderAll();
};

renderAll();
