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


const removeAll = () => {
  app.options = [];
  renderAll();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  console.log(option);
};

const appRoot = document.getElementById('app');


const renderAll = () => {
  const template = ( 
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Options present" : "No options"}</p>

      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={removeAll}>Remove all</button>
      <ol>{
            app.options.map( (x, i) =>           <li key={i}>{x}</li>)
          }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);

};

renderAll();