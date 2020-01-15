import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/actions';
import 'bootstrap/dist/css/bootstrap.min.css';
// import * as ReactBootstrap from 'react-bootstrap';
import { Row, Col, Image } from 'react-bootstrap'

import '../layout.css'

class SopraList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
      data: []
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchData());
  };

  // componentDidUpdate() {
  //   this.props.dispatch(fetchData()); // this deals with client side update though
  // }

  handleChange = event => {
    this.setState({ filter: event.target.value });
    this.setState((state, props) => ({
      data: this.props.myData.Brastlewark
    }))
  };

  render() {

    const { filter, data } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = data.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toString().toLowerCase().includes(lowercasedFilter)
      );
    });
    return (
         <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="jumbotron">
                <h2>
                <input value={filter} onChange={this.handleChange} />
                {this.props.isFetching && <div>Loading...</div>}
                  Hello, Sopra Speria!
                </h2>
                <p>
                {!this.props.isFetching && <div>You may start searching for Orcs in the vilage by typing into the search box above.</div>}
                </p>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="row">
                {filteredData.map(item => (
                <div class="col-md-4 col-xs-6">
                  <div class="card">
                    <img class="card-img-top img-fluid" src={item.thumbnail} alt="Card image cap"/>
                    <div class="card-block">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div> 
              ))}
            </div>
          </div>
        {/* {console.log(this.props.myData.Brastlewark)} */}
        </div>
    );
  }
}

const mapStateToProps = ({ things: { myData, isFetching } }) => ({
  myData,
  isFetching
});

export default connect(mapStateToProps)(SopraList);
