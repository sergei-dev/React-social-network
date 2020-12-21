import React, { useEffect, useState } from 'react';
import styles from './ProfileStatus.module.css';

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const showEditMode = () => {
        setEditMode(true);
    }

    const hideEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    return (
        <div>
            {
                !editMode &&
                <div>
                    <span onDoubleClick={showEditMode} className={styles.statusText}>{props.status || 'Not status'}</span>
                </div>
            }
            {
                editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={hideEditMode} className={styles.input} value={status} type="text" />
                </div>
            }
        </div>
    )
}

export default ProfileStatus;