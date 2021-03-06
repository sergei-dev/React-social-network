import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Music from './components/Music/Music';
import NavbarContainer from './components/Navbar/NavbarContainer';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import { initialiseApp } from './redux/app-reducer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/Preloader/Preloader';

class App extends React.Component {
    componentDidMount() {
        this.props.initialiseApp();
    }

    render() {
        if (!this.props.initialised) {
            return <Preloader />
        }

        return (
            <div className="App">
              <div className="app-wrapper">
                <HeaderContainer />
                <NavbarContainer />
                <div className="app-wrapper-content">
                  <Route path="/dialogs" render={() => <DialogsContainer /> } />
                  <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                  <Route path="/news" render={() => <News />} />
                  <Route path="/music" render={() => <Music />} />
                  <Route path="/settings" render={() => <Settings />} />
                  <Route path="/users" render={() => <UsersContainer />} />
                  <Route path="/login" render={() => <Login />} />
                </div>
              </div>
            </div>
          );
    }
}

const mapStateToProps = (state) => ({
    initialised: state.app.initialised
})

export default compose(
    withRouter,
    connect(mapStateToProps, { initialiseApp }))(App);
