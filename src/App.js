import React from 'react';
import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions';

class SopraList extends Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.dispatch(fetchData());
  }

}

const mapStateToProps = ({ things: { myData, isFetching } }) => ({
  myData,
  isFetching
});

export default connect(mapStateToProps)(SopraList);
