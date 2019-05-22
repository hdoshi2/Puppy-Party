import React from "react";
import { connect } from "react-redux";

const Parties = props => {
  return (
    <div id="header">
      <h1>Parties</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    partyList: state.partyReducer
  };
};

export default connect(mapStateToProps)(Parties);
