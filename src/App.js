import React from 'react';
import { connect } from 'react-redux';
import PropTypes  from 'prop-types';
import { history } from './helpers/history';
import { alertActions } from './LoginPage/actions/alertActions';
import { NavBar } from './Navigation/NavBar';
import Content from './content';

class App extends React.Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

      const { dispatch } = this.props;

      history.listen((location, action) => {
          // clear alert on location change
          dispatch(alertActions.clear());
      });
  }

  render() {
    const { alert } = this.props;
    const { children } = this.props;
    const { loggedIn } = this.props;

    let navHeader = loggedIn ? <NavBar /> : null;

    return (
      <div className="jumbotron">      
        {navHeader}
        {
          alert.message &&
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        }
        <Content body={children} />
      </div>
    );
  }
}

function mapStateToProps(state) {
    const { alert, authentication } = state;
    const { loggedIn } = authentication;
    return {
        alert,
        loggedIn,
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
