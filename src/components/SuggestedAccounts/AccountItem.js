import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f90cc529e5bacc99b1459a81ab73ca87~c5_100x100.jpeg?x-expires=1679706000&x-signature=Bt20ZFslH992IjACuIkBNVRatYU%3D"
                alt=""
            />

            <div className={cx('info')}>
                <h4 className={cx('nickname')}>
                    <strong>ĐatVina TA BA</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>

                <h4 className={cx('name')}>Lò Thị Đạt</h4>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};
export default AccountItem;
