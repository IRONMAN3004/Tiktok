import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState, useRef } from 'react';
import AccountItem from '~/components/AccountItem';

import HeadlessTippy from '@tippyjs/react/headless';
import styles from './Search.module.scss';
import 'tippy.js/dist/tippy.css';

import { Wrapper as PopperWrapper } from '~/components/Popper';
// ---------------------------------------

const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const myRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([12, 21, 2]);
        }, 5000);
    }, []);

    //Handle
    const handleClear = () => {
        setSearchValue('');
        myRef.current.focus();
        setSearchResult([]);
    };

    const handleHideResult = () => {
        setShowResult(false);
    };
    // console.log(searchValue);
    return (
        <HeadlessTippy
            visible={showResult && searchResult.length > 0}
            // trigger="click"
            interactive="true"
            delay={[0, 250]}
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
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={myRef}
                    value={searchValue}
                    className={cx('search_input')}
                    spellCheck="false"
                    placeholder="Tìm kiếm tài khoản và video..."
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => {
                        setShowResult(true);
                    }}
                />

                {!!searchValue && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon className={cx('close')} icon={faCircleXmark} />
                    </button>
                )}

                <button className={cx('Search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
