import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { requiredField, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../FormsControls/FormControl';
import styles from './AddMessageForm.module.css';

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="message" component={Textarea} 
             validate={[requiredField, maxLength100]}   className={styles.textarea}/>
            <button>Send message</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({
    form: 'dialogsAddMessageForm'
})(AddMessageForm)

export default AddMessageFormRedux;