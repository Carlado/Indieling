import React, {Component, PropTypes} from 'react';
import Topbar from './topbar'


class App extends Component {
  render() {
    return (
      <div>
        <Topbar />
        <div className="app-window">
          {this.props.children}
        </div>
      </div>

    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
