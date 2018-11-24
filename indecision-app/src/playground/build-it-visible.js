class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.hiddenText = "My hidden text";
    this.state = {
      toShow: false,
    }
  }
  
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        toShow: !prevState.toShow,
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.toShow ? 'Hide' : 'Show'}
        </button>
          {this.state.toShow && <p>{this.hiddenText}</p>}
      </div>
    );

  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// ===== below the old version without components

// console.log('Starting visibility toggle');

// const hiddenText = "This text is sometimes shown";
// let toShow = true;

// const appRoot = document.getElementById('app');

// const toggleShow = () => {
//   toShow = !toShow; 
//   renderAll();
// }

// const renderAll = () => {
//   const template = 
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleShow}>{toShow ? 'Hide ' : 'Show '} details</button>
//       {toShow && <p>{hiddenText}</p>}
//     </div>

//   ReactDOM.render(template, appRoot)
// }

// renderAll();