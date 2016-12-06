import React, {Component, PropTypes} from 'react';
import Topbar from './topbar'


class App extends Component {
  render() {
    return (
      <div>
        <Topbar />
        {this.props.children}
      </div>

    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
