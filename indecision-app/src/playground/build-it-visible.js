console.log('Starting visibility toggle');

const hiddenText = "This text is sometimes shown";
let toShow = true;

const appRoot = document.getElementById('app');

const toggleShow = () => {
  toShow = !toShow; 
  renderAll();
}

const renderAll = () => {
  const template = 
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleShow}>{toShow ? 'Hide ' : 'Show '} details</button>
      {toShow && <p>{hiddenText}</p>}
    </div>

  ReactDOM.render(template, appRoot)
}

renderAll();