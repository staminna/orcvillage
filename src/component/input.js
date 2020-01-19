import React from 'react';
import { connect } from 'react-redux';
import Orcs from './Orcs'
import '../layout.css'

class InputText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          filter: "",
          data: [],
          filteredData: ''
        };
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
        <div className="header">
          <h2>
            <input className="inputbox" onChange={this.handleChange.bind(this)} placeholder="please search" />
          </h2>
          <h2>
            {this.props.isFetching && <div>Loading...</div>}
          </h2>
          <div className="infobox">
            {!this.props.isFetching && <div>Search for Orcs in the vilage by typing into the search box above. </div>}
          </div>
            <Orcs dataFromInput = {filteredData} />
        </div>
        )
    }

}

const mapStateToProps = ({response: { myData, isFetching }}) => ({
  myData,
  isFetching,
});


export default connect(mapStateToProps)(InputText);