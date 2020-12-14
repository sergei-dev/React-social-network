import React from 'react';
import styles from './AddNewPostForm.module.css';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, requiredField } from '../../../../utils/validators/validators';
import { Textarea } from '../../../FormsControls/FormControl';

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styles.textareaWrap}>
                <Field name="postMessage" placeholder="New post" 
                    className={styles.textarea} component={Textarea}
                    validate={[requiredField, maxLength10]}/>
            </div>
            <button className="button">Add post</button>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({
    form: 'AddNewPostForm'
})(AddNewPostForm)

export default AddNewPostFormRedux;