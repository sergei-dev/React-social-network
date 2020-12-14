import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';

const MapStateToProps = (state) => ({
    profilePage: state.profilePage
});

const MapDispatchToProps = (dispatch) => ({
    addPost: (postMessage) => {
        let action = addPostActionCreator(postMessage);
        dispatch(action);
    },
})

const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts);

export default MyPostsContainer;