"use strict";

console.log('App.js is running');

var app = {
  title: "Indecision app",
  subtitle: "My first react app",
  options: [
    // "first option", "2nd option"
  ]
};

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
  )
);

var appRoot = document.getElementById('app');
ReactDom.render(template, appRoot);
