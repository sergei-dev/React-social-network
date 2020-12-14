import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../Preloader/Preloader';
import ProfileStatus from '../ProfileStatus/ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.imgWrap}>
                <img src="https://karelinform.ru/attachments/e3f618c8f4c3f22c7c7af38c6c6e466b5e4ee93b/store/fill/780/440/8afdeb629964512d21ca791dbac9ce4d07872b767a488a975e641ec3433e/0LZSiE1PfFk.jpg" className={styles.img} />
            </div>
            <div className={styles.infoWrap}>
                <div className={styles.top}>
                    <div className={styles.avatarWrap}>
                        <img src={props.profile.photos.large} className={styles.avatar} alt="" />
                    </div>
                    <div className={styles.name}>
                        <h3>{props.profile.fullName}</h3>
                    </div>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                </div>
                <div>
                    <div className={styles.item}>
                        <h3 className={styles.title}>About me:</h3>
                        <p>{props.profile.aboutMe}</p>
                    </div>
                    <div className={styles.jobStatus}>
                        <h3 className={styles.title}>Job Status:</h3>
                        <p>{props.profile.lookingForAJobDescription}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;