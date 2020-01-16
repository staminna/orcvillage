import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/actions';
import 'bootstrap/dist/css/bootstrap.min.css';
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
        <div className="jumbotron">
          <h1 className="row">
            {this.props.isFetching && <div>Loading...</div>}
              Hello, Sopra Speria!
          </h1>
          <h2>
            <input value={filter} onChange={this.handleChange} placeholder="please search" />
          </h2>
            {!this.props.isFetching && <div> You may start searching for Orcs in the vilage by typing into the search box above. </div>}
        </div>

        <div className="container">
          <div className="row">
              {filteredData.map(item => (
              <div className="col-md-4 col-xs-6" key={item.id}>
                <div className="card">
                    <img className="card-img-top img-fluid" src={item.thumbnail} alt={item.age}/>
                  <div className="card-block">
                    <h5 className="card-title">{item.professions.toString().split(', ')}</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 1 sec ago</small></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      {console.log(this.props.myData.Brastlewark)}
      </div>
    );
  }
}

const mapStateToProps = ({ things: { myData, isFetching } }) => ({
  myData,
  isFetching
});


export default connect(mapStateToProps)(SopraList);
