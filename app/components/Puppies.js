import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export const Puppies = props => {
  const { puppyList } = props;
  return (
    <div id="header">
      <h1>Puppies</h1>
      {puppyList.map(puppy => (
        <div key={puppy.id}>
          <Link to={`/puppies/${puppy.id}`}>{puppy.name}</Link>
          <div>{puppy.imageUrl}</div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    puppyList: state.puppyReducer
  };
};

export default connect(mapStateToProps)(Puppies);
