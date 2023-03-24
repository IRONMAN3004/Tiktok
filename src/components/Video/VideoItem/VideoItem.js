import classNames from 'classnames/bind';
import styles from './VideoItem.module.scss';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faHeart, faMusic, faShare } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function VideoItem({ props }) {
    return (
        <div className={cx('wrapper')}>
            <Link to="/profile">
                <span>
                    <Image className={cx('image')} src="" />
                </span>
            </Link>
            <div className={cx('body')}>
                <div className={cx('info')}>
                    <a className={cx('name')} href="null">
                        <h4>_vn.p</h4>
                        <h5>1900 le the</h5>
                    </a>
                    <div className={cx('description')}>
                        <h4>[Live] RPT MCK - Anh Đã Ổn Hơn @"99%"</h4>
                    </div>
                    <div className={cx('hastags')}>
                        <a className={cx('hastag-link')} href="/#">
                            <strong> #Album</strong>
                        </a>
                        <a className={cx('hastag-link')} href="/#">
                            <strong> #SUY</strong>
                        </a>
                        <a className={cx('hastag-link')} href="/#">
                            #<strong> Night</strong>
                        </a>
                        <a className={cx('hastag-link')} href="/#">
                            <strong> #1900</strong>
                        </a>
                        <a className={cx('hastag-link')} href="/#">
                            <strong> #rapper</strong>
                        </a>
                    </div>
                    <h4 className={cx('name-music')}>
                        <FontAwesomeIcon icon={faMusic} className={cx('icon-music')} />
                        Anh Đã Ổn Hơn
                    </h4>
                    <Button primary small className={cx('btn')}>
                        Follow
                    </Button>
                </div>

                <div className={cx('video')}>
                    <div className={cx('video-container')}>
                        <iframe
                            // width="320"
                            // height="515"
                            src="https://www.youtube.com/embed/dz6xe0xXqYE"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                    </div>
                    <div className={cx('icons')}>
                        <button>
                            <FontAwesomeIcon className={cx('icon-heart')} icon={faHeart} />
                            <span>24.6M</span>
                        </button>
                        <button>
                            <FontAwesomeIcon className={cx('icon-comment')} icon={faCommentDots} />
                            <span>305.9k</span>
                        </button>
                        <button>
                            <FontAwesomeIcon className={cx('icon-share')} icon={faShare} />
                            <span>105.2k</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoItem;
