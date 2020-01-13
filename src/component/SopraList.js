import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/actions';
// import { store } from '../store/store'

class SopraList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
      data: []
    };
      // store.subscribe(() => {
      // // When state will be updated(in our case, when items will be fetched), 
      // // we will update local component state and force component to rerender 
      // // with new data.

      // this.setState({
      //   items: store.getState().items
      // });

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
      <div>
        <input value={filter} onChange={this.handleChange} />
        {filteredData.map(item => (
          <div key={item.id}>
            <div> {item.name} </div>
          </div>
        ))}
      {this.props.isFetching && <div>Loading...</div>}
      <ul>
        {console.log(this.props.myData.Brastlewark)}
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