import { useState } from 'react';
import { animated, useSpring } from 'react-spring';

import { faCommentDots, faHeart, faMusic, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import Image from '~/components/Image';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import ShareItem from './ShareItem';
import styles from './VideoItem.module.scss';

const cx = classNames.bind(styles);

function VideoItem({ data }) {
    const [isLiked, setLiked] = useState(false);

    const likeAnimation = useSpring({
        transform: isLiked ? 'scale(1.2)' : 'scale(1)',
        config: { tension: 800, friction: 50 },
    });

    const handleLikeClick = () => {
        setLiked(!isLiked);
    };

    // handle preview
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props} className={cx('share-wrapper')}>
                <PopperWrapper>
                    <ShareItem />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <>
            {data.map((item, index) => (
                <div key={index} className={cx('wrapper')}>
                    <Link to="/profile">
                        <span>
                            <Image className={cx('image')} src={item.src} />
                        </span>
                    </Link>
                    <div className={cx('body')}>
                        <div className={cx('info')}>
                            <a className={cx('name')} href="null">
                                <h4>{item.nickname}</h4>
                                <h5>{item.name}</h5>
                            </a>
                            {item.none && (
                                <div className={cx('description')}>
                                    <h4>{item.description}</h4>
                                </div>
                            )}
                            <div className={cx('hastags')}>
                                {item.hastags.map((hastag, id) => (
                                    <a key={id} className={cx('hastag-link')} href="/#">
                                        <strong>{hastag}</strong>
                                    </a>
                                ))}
                            </div>
                            <h4 className={cx('name-music')}>
                                <FontAwesomeIcon icon={faMusic} className={cx('icon-music')} />
                                {item.namemusic}
                            </h4>
                            <Button primary small className={cx('btn')}>
                                Follow
                            </Button>
                        </div>

                        <div className={cx('video')}>
                            {item.frame}

                            <div className={cx('icons')}>
                                <button style={likeAnimation} onClick={handleLikeClick}>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className={cx('icon-heart', { onactive: isLiked })}
                                    />
                                    <span>{item.like}</span>
                                </button>

                                <button>
                                    <FontAwesomeIcon className={cx('icon-comment')} icon={faCommentDots} />
                                    <span>{item.cmt}k</span>
                                </button>

                                <Tippy interactive offset={[-170, -60]} placement="right" render={renderPreview}>
                                    <button>
                                        <FontAwesomeIcon className={cx('icon-share')} icon={faShare} />
                                        <span>{item.share}</span>
                                    </button>
                                </Tippy>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default VideoItem;
