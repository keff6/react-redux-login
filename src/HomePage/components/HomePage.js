import React from 'react';
import { connect } from 'react-redux';

import { userActions } from '../../LoginPage/actions/userActions';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.dispatch(userActions.getAll());
  }

  render() {
    const { user, users } = this.props;
    return (
      <div className="col-md-6 col-md-offset-3">
        <h1>Hi <strong>{user.firstName}</strong>!</h1>
        <p>You're logged in with React!!</p>
        <h3>All registered users:</h3>
        {users.loading && <em>Loading users...</em>}
        {users.items &&
          <ul>
            {users.items.map((user, index) =>
              <li key={user.id}>
                {user.firstName + ' ' + user.lastName}
              </li>
            )}
          </ul>
        }
        <p>Psst! look into the console to see redux-logger at work!</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return {
    user,
    users
  };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as Home };