import { faCaretDown, faCode, faLink, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './VideoItem.module.scss';
import classNames from 'classnames/bind';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);
const ShareItem = () => {
    return (
        <div className={cx('wrapper-item')}>
            <div className={cx('share-wrapper-item')}>
                <button>
                    <FontAwesomeIcon icon={faCode} />
                </button>
                <p>Nhúng</p>
            </div>
            <div className={cx('share-wrapper-item')}>
                <button>
                    <FontAwesomeIcon icon={faPaperPlane} />
                </button>
                <p>Gửi đến bạn</p>
            </div>
            <div className={cx('share-wrapper-item')}>
                <button>
                    <FontAwesomeIcon icon={faFacebook} />
                </button>
                <p>Share to Facebook</p>
            </div>
            <div className={cx('share-wrapper-item')}>
                <button>
                    <FontAwesomeIcon icon={faLink} />
                </button>
                <p>Sao chép liên kết</p>
            </div>
            <a href="null" className={cx('link')}>
                <FontAwesomeIcon className={cx('icon-down')} icon={faCaretDown} />
            </a>
        </div>
    );
};

export default ShareItem;
