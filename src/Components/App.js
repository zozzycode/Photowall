import Main from './Main';
import { connect } from 'react-redux'; // connecting store with an app
import { bindActionCreators } from 'redux'; // bind actions and dispatch
import * as actions from '../redux/actions'; // import All actions
import { withRouter } from 'react-router'; // connecting when we use Router

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

export default App;
