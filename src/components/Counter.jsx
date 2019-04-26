import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: ["tag1", "tag2", "tag3"]
  };

  formatValue = () => {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  };

  handleIncrement = product => {
    console.log(product);
    this.setState({
      value: this.state.value + 1
    });
  };

  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };
  render() {
    let classes = this.getBadgeClasses();
    console.log("props", this.props);
    return (
      <div>
        {console.log("children", this.props.children)}
        <span className={classes}>{this.formatValue()}</span>
        <button
          onClick={this.doHandleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.id)}
        >
          Delete
        </button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  };
}

export default Counter;
