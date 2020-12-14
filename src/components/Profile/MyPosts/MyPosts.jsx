import React from 'react';
import AddNewPostFormRedux from './AddNewPostForm/AddNewPostForm';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    const postList = props.profilePage.postsData.map(post => <Post key={post.id} text={post.text} like={post.like} />);

    const onAddPost = (values) => {
        props.addPost(values.postMessage);
    }

    return (
        <div className={styles.myPosts}>
            <h3 className={styles.postTitle}>Posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={styles.posts}>
                {postList}
            </div>
        </div>
    )
}

export default MyPosts;