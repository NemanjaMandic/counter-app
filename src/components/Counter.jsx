import React, { Component } from "react";

class Counter extends Component {
  render() {
    console.log("props", this.props);
    return (
      <div>
        {console.log("children", this.props.children)}
        <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  formatValue = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };
}

export default Counter;
