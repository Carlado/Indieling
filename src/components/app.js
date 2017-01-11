import React, {Component, PropTypes} from 'react';
import Topbar from './topbar';
import Footer from './footer';


class App extends Component {
  render() {
    return (
      <div>
        <Topbar />
        <div className="app-window">
          {this.props.children}
        </div>
        <Footer />
      </div>

    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
