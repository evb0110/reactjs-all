import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./EditableButton.css";

class EditableButton extends Component {
  state = {
    temperature: "",
    editable: false,
    value: "a",
    input: "",
    instruction: { false: "Edit", true: "Done" }
  };

  onChangeValue = e => {
    this.setState({ value: e.target.value });
  };

  onEdit = e => {
    this.setState({ editable: !this.state.editable });
  };

  onMyClick = () => {
    this.setState({ input: this.state.input + this.state.value });
  };

  onInputChange = e => {
    this.setState({ input: e.target.value });
  };

  render() {
    const temperature = this.state.temperature;
    return (
      <div>
        <h1>Edit the button and start using it</h1>

        <textarea
          key="given"
          rows={5}
          cols={40}
          value={this.state.input}
          onChange={this.onInputChange}
        />

        <div className="wrapper">
          {this.state.editable ? (
            <textarea
              key="mine"
              rows="1"
              cols="3"
              maxLength="3"
              className="buttonchange"
              value={this.state.value}
              onChange={this.onChangeValue}
            />
          ) : (
            <p className="mybutton" onClick={this.onMyClick}>
              {this.state.value}
            </p>
          )}
        </div>
        <button onClick={this.onEdit}>
          {this.state.instruction[this.state.editable]}
        </button>
      </div>
    );
  }
}

export default EditableButton;

ReactDOM.render(<EditableButton />, document.getElementById("root"));
