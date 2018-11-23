console.log('App.js is running');

const app = {
  title: "Indecision app",
  subtitle: "My first react app",
  options: [
    // "first option", "2nd option"
  ],
};


const template = ( 
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


const user = {
  name: 'Vladimir',
  age: 44,
  location: 'Moscow',
};

const templateTwo = (
    <div>
      <h1>my name is {user.name}</h1>
      <p>my age is {user.age}</p>
      <p>my location is {user.location}</p>
    </div>
);
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot); 
