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
    try {
      this.props.dispatch(fetchData());
    }
    catch(e) {
      // Always include a .catch() after a Promise (an API call)
      console.error('Error occured fetching asynchronously' + e);
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <App />
        <InputText />
      </div>
    );
  }
}

const mapStateToProps = ({ response: { myData, isFetching } }) => ({
  myData,
  isFetching
});


export default connect(mapStateToProps)(OrcList);
