import React, {Component} from 'react';
import {connect} from 'react-redux';

class PlayList extends Component {

  listItems() {
    return this.props.list.list.map(track => {
      return (
        <li>{track.name}</li>
      );
    });
  }

  render() {
    if (!this.props.list) {
      return <div>Hiii</div>
    }
    console.log(this.props.list);
    return (
      <div>
        <ul>{this.listItems()}</ul>
      </div>
    );
  }

}

function mapStateTopProps(state) {
  return {
    list: state.list
  }
}

export default connect(mapStateTopProps)(PlayList);
