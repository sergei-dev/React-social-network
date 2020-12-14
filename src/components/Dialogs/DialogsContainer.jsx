import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addMessageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const MapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage,
})

const MapDispatchToProps = (dispatch) => ({
    sendMessage: (message) => {
        const action = addMessageActionCreator(message);
        dispatch(action);
    }
})

export default compose(
    connect(MapStateToProps, MapDispatchToProps),
    withAuthRedirect
)(Dialogs);