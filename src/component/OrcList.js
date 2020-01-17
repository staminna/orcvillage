import React, { Component } from 'react';
import App from '../App'
import InputText from './input';
import { connect } from 'react-redux';
import { fetchData } from '../actions/actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../layout.css'

class OrcList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
      data: [],
      filteredData: {}
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchData());
  };

  render() {
    // const filteredData = this.props.filteredData;
    return (
      <div className="container-fluid">
        <App />
        <InputText />
      </div>
    );
  }
}

const mapStateToProps = ({ things: { myData, isFetching } }) => ({
  myData,
  isFetching
});


export default connect(mapStateToProps)(OrcList);
