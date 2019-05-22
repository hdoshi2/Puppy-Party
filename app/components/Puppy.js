import React from "react";
import { connect } from "react-redux";

const Puppy = props => {
  const { puppy } = props;
  return (
    //&& for checking that it loaded
    <div>
      {puppy && (
        <div>
          <div>{puppy.name}</div>
          <div>{puppy.imageUrl}</div>
          <div>{puppy.birthdate}</div>
        </div>
      )}
    </div>
  );
};

const mapsStateToProps = (state, ownProps) => {
  const id = +ownProps.match.params.puppyId;
  return {
    puppy: state.puppyReducer.find(puppy => puppy.id === id)
  };
};

export default connect(mapsStateToProps)(Puppy);
