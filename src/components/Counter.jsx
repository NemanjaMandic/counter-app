import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("Prev props, prev state", prevProps, prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
    }
  }
  render() {
    const { counter, onIncrement, onDecrement, onDelete } = this.props;
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => onIncrement(counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            Increment
          </button>
          <button
            onClick={() => onDecrement(counter)}
            className="btn btn-secondary btn-sm"
            disabled={counter.value === 0 ? "disabled" : ""}
          >
            Decrement
          </button>
          <button
            className="btn btn-danger btn-sm m-2"
            onClick={() => onDelete(counter.id)}
          >
            X
          </button>
        </div>
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
