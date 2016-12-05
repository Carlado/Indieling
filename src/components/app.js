import React, {Component, PropTypes} from 'react';
import Topbar from './topbar'


class App extends Component {
  render() {
    return (
      <Topbar />
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
