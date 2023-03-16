import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/c0e877c20e830d65f50a764a0d9bf1ad~c5_100x100.jpeg?x-expires=1679112000&x-signature=Nqg0OerfQCxii6LImd%2BwXgvoKUw%3D"
                alt="avatar acount"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span className={cx('user-name')}>Phạm Văn Nam</span>
                    <FontAwesomeIcon className={cx('icon-user-name')} icon={faCircleCheck}></FontAwesomeIcon>
                </h4>

                <p className={cx('full-user-name')}>Phạm Văn Nam</p>
            </div>
        </div>
    );
}

export default AccountItem;
