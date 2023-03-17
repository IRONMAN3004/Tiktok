import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import images from '~/asset/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSignIn, faSpinner } from '@fortawesome/free-solid-svg-icons';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

import Tippy from '@tippyjs/react/headless';
// import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 5000);
    }, []);
    const cx = classNames.bind(styles);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="logo tiktok" />
                </div>

                <Tippy
                    visible={searchResult.length > 0}
                    interactive="true"
                    //Đoạn này tức mình tự tạo content nó hiện ra chứ ko dùng mặc định
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Account</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            className={cx('search_input')}
                            spellCheck="false"
                            placeholder="Tìm kiếm tài khoản và video..."
                        />

                        {/*---- search-action------------ */}
                        <button className={cx('clear')}>
                            <FontAwesomeIcon className={cx('close')} icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('Search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>

                <div className={cx('action')}>
                    {/* <Button primary href="/"> */}
                    <Button text>Upload</Button>
                    {/* Trường hợp tự custom ở 1 file khác chứ ko phải ở component custom thì thêm classname vào className={cx('custom-login')}} */}
                    <Button primary rightIcon={<FontAwesomeIcon icon={faSignIn} />}>
                        Login
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
