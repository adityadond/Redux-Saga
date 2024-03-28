import React, { Component } from "react";
import { connect } from "react-redux";
import { increment } from "./action"; // Import your action creator function
import { Link } from "react-router-dom";

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
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }

  handleIncrementClick = (e) => {
    e.preventDefault(); // Prevent the default behavior (navigation)
    this.props.increment();
  };

  render() {
    console.log("2. render");
    return (
      <div>
        <button onClick={this.handleIncrementClick}>Increment</button>
        <br />
        <Link to="/sagaJson" style={{ margin: "200px" }}>
          Saga
        </Link>
        <div>ClassComponents {this.props.num}</div>
        {this.state.updatedFromProps && (
          <div>Component Updated from Props!</div>
        )}
      </div>
    );
  }
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
