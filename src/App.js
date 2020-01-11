import React from 'react';
import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions';

class SopraList extends Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.dispatch(fetchData());
  }

  render() {
    return (
      // <div>
      //   <button type="button" onClick={this.handleClick}>GET DATA</button>
      //   {this.props.isFetching && <div>Loading App...</div>}
      //   <ul>
      //     {this.props.myData.map(d => <li key={d.id}>{d.title}</li>)}
      //   </ul>
      // </div>
    );
  }
}

const mapStateToProps = ({ things: { myData, isFetching } }) => ({
  myData,
  isFetching
});

export default connect(mapStateToProps)(SopraList);