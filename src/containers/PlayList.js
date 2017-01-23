import React, {Component} from 'react';
import {connect} from 'react-redux';
import {clearList, replayList} from '../actions/playActions';

class PlayList extends Component {

  listItems() {
    return this.props.list.list.map(track => {
      return (
        <li key={track.id}>{track.name}</li>
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
        <button onClick={() => this.props.clearList()}>Clear queue</button>
        <button onClick={() => this.props.replayList()}>Play again</button>
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

export default connect(mapStateTopProps, {clearList, replayList})(PlayList);
