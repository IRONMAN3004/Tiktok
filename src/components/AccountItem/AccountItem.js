import PropTypes from 'prop-types';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '~/components/Image/Image';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
// import config from '~/config';

const cx = classNames.bind(styles);
function AccountItem({ data }) {
    // console.log(data);
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src={data.avatar}
                alt={data.avatar}
                // fallback=""
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span className={cx('user-name')}>{data.nickname}</span>
                    {data.tick && (
                        <FontAwesomeIcon className={cx('icon-user-name')} icon={faCircleCheck}></FontAwesomeIcon>
                    )}
                </h4>

                <p className={cx('full-user-name')}>{data.full_name}</p>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object,
};
export default AccountItem;
