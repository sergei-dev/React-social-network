import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import styles from './Dialogs.module.css';
import AddMessageFormRedux from './AddMessageForm/AddMessageForm';

const Dialogs = (props) => {

    const addNewMessage = (values) => {
        props.sendMessage(values.message)
    }

    const dialogsList = props.dialogsPage.dialogsData.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />);

    const messagesList = props.dialogsPage.messagesData.map(message => <Message text={message.message} key={message.id} />);

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsWrap}>
                <h3 className={styles.title}>Dialogs</h3>
                <div className={styles.list}>
                    {dialogsList}
                </div>
            </div>
            <div className={styles.messages}>
                {messagesList}
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    )
}

export default Dialogs;