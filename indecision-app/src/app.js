console.log('App.js is running');

let app = {
  title: "Indecision app",
  subtitle: "My first react app",
  options: [
    // "first option", "2nd option"
  ],
};


let template = ( 
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Options present" : "No options"}</p>
    <ol>
      <li>first item</li>
      <li>second item</li>
    </ol>
  </div>
);


let user = {
  name: 'Vladimir',
  age: 44,
  location: 'Moscow',
};

var templateTwo = (
    <div>
      <h1>my name is {user.name}</h1>
      <p>my age is {user.age}</p>
      <p>my location is {user.location}</p>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot); 
