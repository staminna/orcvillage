import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions/actions';
import './App.css';


class App extends Component {
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

const mapDispatchToProps = {
  fetchData,
 }

export default connect(mapStateToProps, mapDispatchToProps)(App);
