import React, { Component } from "react";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import { Route, Link } from "react-router-dom"; // add path to links, builds URL
import Single from "./Single";
import * as routes from "./url";

class Main extends Component {
  state = { loading: true };

  componentDidMount() {
    this.props.startLoadingPost().then(() => {
      this.setState({ loading: false });
    });
    this.props.startLoadingComments();
  }

  render() {
    return (
      <div>
        <h1>
          <Link to={routes.HOME}> Photowall </Link>
        </h1>
        <Route
          exact
          path={routes.HOME}
          render={() => (
            <div>
              <PhotoWall {...this.props} />
            </div>
          )}
        />

        <Route
          path={routes.ADD_PHOTO}
          render={({ history }) => <AddPhoto {...this.props} />}
        />

        <Route
          path={routes.SINGLE + ":id"}
          render={params => (
            <div>
              <Single
                loading={this.state.loading}
                {...this.props}
                {...params}
              />
            </div>
          )}
        />
      </div>
    );
  }
}

export default Main;
