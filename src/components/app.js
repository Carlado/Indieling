import React, {Component, PropTypes} from 'react';
import Topbar from './Topbar';
import Footer from './Footer';
import Player from '../containers/Player';


class App extends Component {
  render() {
    return (
      <div>
        <Topbar />
        <div className="app-window">
          {this.props.children}
        </div>
        <Player />
        <Footer />
      </div>

    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
