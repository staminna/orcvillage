import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/actions';
import 'bootstrap/dist/css/bootstrap.min.css';
// import * as ReactBootstrap from 'react-bootstrap';

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

  componentDidUpdate() {
    this.props.dispatch(fetchData()); // this deals with client side update though
  }

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
                  You may start searching for Orcs in the vilage by typing into the search box above.
                </p>
              </div>
            </div>
          </div>
          {filteredData.map(item => (
            <div className="row">
              <div className="col-md-4">
               <h2>
                 {item.name} 
               </h2>
                <img src={item.thumbnail} />
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
              </p>
              </div>
            </div>
        ))}

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
