import React, { Component } from "react";
import { connect } from "react-redux";
import { increment } from "./action"; // Import your action creator function

export class ClassComponents extends Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      updatedFromProps: false,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.num !== prevState.num) {
      console.log("5. getDerivedStateFromProps");
      return { updatedFromProps: true };
    }
    return null;
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      console.log("Action performed after 2 seconds");
    }, 2000);
    console.log("1. componentDidMount");
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
    console.log("6. componentWillUnmount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("3. componentDidUpdate", prevProps, prevState);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("4. getSnapshotBeforeUpdate", prevProps, prevState);
    return null;
  }

  render() {
    console.log("2. render");
    return (
      <div>
        <button onClick={this.handleIncrementClick}>Increment</button>
        <div>ClassComponents {this.props.num}</div>
        {this.state.updatedFromProps && (
          <div>Component Updated from Props!</div>
        )}
      </div>
    );
  }

  handleIncrementClick = () => {
    this.props.increment();
  };
}

const mapStateToProps = (state) => {
  return {
    num: state.reducer.num,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClassComponents);
