import { connect } from 'react-redux';
import Navbar from './Navbar';

const MapStateToProps = (state) => ({
    state: state
})

const NavbarContainer = connect(MapStateToProps)(Navbar);

export default NavbarContainer;