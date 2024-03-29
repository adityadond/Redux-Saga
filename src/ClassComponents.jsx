import React, { Component } from "react";
import { connect } from "react-redux";
import { increment } from "./action"; // Import your action creator function
import { Link } from "react-router-dom";

export class ClassComponents extends Component {
  render() {
    return (
      <>
        <div>
          <br />
          <Link to="/sagaJson" style={{ margin: "200px" }}>
            click to navigate to post data
          </Link>
        </div>
      </>
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
