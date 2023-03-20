import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '~/components/Image';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/c0e877c20e830d65f50a764a0d9bf1ad~c5_100x100.jpeg?x-expires=1679112000&x-signature=Nqg0OerfQCxii6LImd%2BwXgvoKUw%3D"
                alt="avatar acount"
                fallback="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Manchester_United_v_Villarreal_CF%2C_29_September_2021_%2824%29.jpg/250px-Manchester_United_v_Villarreal_CF%2C_29_September_2021_%2824%29.jpg"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span className={cx('user-name')}>@yboy304</span>
                    <FontAwesomeIcon className={cx('icon-user-name')} icon={faCircleCheck}></FontAwesomeIcon>
                </h4>

                <p className={cx('full-user-name')}>Phạm Văn Nam</p>
            </div>
        </div>
    );
}

export default AccountItem;
