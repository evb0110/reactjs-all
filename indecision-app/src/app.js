console.log('App.js is running');

const app = {
  title: "Indecision app",
  subtitle: "My first react app",
  options: [
  ],
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }
  console.log(option);
  renderAll();
};



const appRoot = document.getElementById('app');


const renderAll = () => {
  const template = ( 
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Options present" : "No options"}</p>
      <p>{app.options.length}</p>
      <button onClick={removeAll}>Remove all</button>
      <ol>
        <li>first item</li>
        <li>second item</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);

};

const removeAll = () => {
  app.options = [];
  renderAll();
};

renderAll();