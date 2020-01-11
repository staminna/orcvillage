import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/actions';

class SopraList extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.dispatch(fetchData());
  }

  render() {
    return (
      <div>
          <button type="button" onClick={this.handleClick}>Play game</button>
        {this.props.isFetching && <div>Loading...</div>}
        <ul>
          {console.log(this.props.myData.Brastlewark)}
          {/* {this.props.myData.Brastlewark[0].map(d => <li key={d.id}>{d.Brastlewark[0].name}</li>)} */}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ things: { myData, isFetching } }) => ({
  myData,
  isFetching
});

export default connect(mapStateToProps)(SopraList);