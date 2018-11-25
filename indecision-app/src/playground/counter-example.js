class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    try {
      const count = parseInt(localStorage.getItem('count'));
      if (!isNaN(count)) {
        this.setState(() => ({ count }));
      }
    } catch (e) {
      // Do nothing
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
    } 
  }

  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      }
    });
  }
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
        <button onClick={this.handleAddOne}>+1</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;
// const addOne = () => {
//   count++;
//   initTemplate();
//   renderCounterApp();
// };
// const reset = () => {
//   count = 0;
//   initTemplate();
//   renderCounterApp();
// };
// const minusOne = () => {
//   count--;
//   initTemplate();
//   renderCounterApp();
// };


// let templateTwo;

// const initTemplate = () => {
//   templateTwo = 
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//       <button onClick={addOne}>+1</button>
//     </div>
//   ;
// };

// const renderCounterApp = () => {

//   ReactDOM.render(templateTwo, appRoot); 
// };

// initTemplate();
// renderCounterApp();