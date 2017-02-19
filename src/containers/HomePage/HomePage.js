import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux'
import { getList } from '../../actions/list-actions';
import Loading from '../../components/Loading/Loading';

export class HomePage extends Component {

  componentDidMount() {
    this.props.dispatch(getList());
  }

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

const mapStateToProps = (state) =>  {
  return {
    isLoading: state.app.isLoading,
    list: state.app.list
  }
};

export default connect(mapStateToProps)(HomePage);
