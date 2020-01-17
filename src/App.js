import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../src/actions/actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
      data: [],
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchData());
  };

  render() {
    return (
      <div className="header">
        <h1> Hello, Sopra Speria </h1>
      </div>
    );
  }
}

const mapStateToProps = ({ things: { myData, isFetching } }) => ({
  myData,
  isFetching
});


export default connect(mapStateToProps)(App);
