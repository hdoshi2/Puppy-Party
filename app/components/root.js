import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getPartiesThunk } from "../reducers/party";
import { getPuppiesThunk } from "../reducers/puppy";
import Parties from "./Parties";
import Puppies from "./Puppies";
import Puppy from "./Puppy";

class Root extends Component {
  componentDidMount() {
    this.props.fetchPuppyList();
    this.props.fetchPartyList();
  }
  render() {
    return (
      <Router>
        <div id="main">
          <div className="column container">
            <div id="header">
              <h1>Puppy Party</h1>
            </div>
          </div>
          {/* <Redirect from="/" to="/puppies" /> */}
          <Route exact path="/puppies" component={Puppies} />
          <Route exact path="/parties" component={Parties} />
          <Route exact path="/puppies/:puppyId" component={Puppy} />
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPartyList: () => dispatch(getPartiesThunk()),
    fetchPuppyList: () => dispatch(getPuppiesThunk())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Root);
