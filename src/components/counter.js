import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Counter = ({ counter = 0, inc, dec, rnd }) => {
  return (
    <div className="jumbotron">
      <h2>{counter}</h2>
      <button className="btn" onClick={dec}>
        Dec
      </button>
      <button className="btn" onClick={inc}>
        Inc
      </button>
      <button className="btn" onClick={rnd}>
        Rnd
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   // const { inc, dec, rnd } = bindActionCreators(actions, dispatch);
//   // return {
//   //   inc,
//   //   dec,
//   //   rnd,
//   // };
//   return bindActionCreators(actions, dispatch);
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default connect(mapStateToProps, actions)(Counter);
