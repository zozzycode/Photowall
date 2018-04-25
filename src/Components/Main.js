import React, { Component } from 'react';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import { Route, Link } from 'react-router-dom'; // add path to links, builds URL
import Single from './Single';

class Main extends Component {
    state = { loading: true };

    componentDidMount() {
        this.props.startLoadingPost().then(() => {
          this.setState({ loading: false });
        });
        this.props.startLoadingComments();
    }

    render() {
        // console.log('Main props', this.props.posts, this.props.comments)
        return (

        <div>
          <h1>
            <Link to="/zozzy/react/"> Photowall </Link>
          </h1>
          <Route exact path = "/zozzy/react/" render={() => (
             <div>
                <PhotoWall {...this.props}/>
             </div>
          )}/>

          <Route path="/zozzy/react/AddPhoto" render={({history}) => (
              <AddPhoto {...this.props} />
            )}/>

          <Route path="/zozzy/react/single/:id" render={(params) => (
            <div>
              <Single loading={this.state.loading} {...this.props} {...params} />
            </div>
          )}/>

        </div>
        )
    }
}

export default Main;
