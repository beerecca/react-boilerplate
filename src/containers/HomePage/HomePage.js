import React, {Component, PropTypes} from 'react';
import Loading from '../../components/Loading/Loading';

class HomePage extends Component {

  render() {
    const {isLoading} = this.props;

    if (isLoading) {
      return (
        <Loading/>
      )
    }
    return (
      <h1>Home page</h1>
    )
  }
}

HomePage.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

export default HomePage;
