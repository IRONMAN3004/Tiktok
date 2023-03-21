import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState, useRef } from 'react';
import { useDebounce } from '~/hooks';
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
    const [loading, setLoading] = useState(false);
    const myRef = useRef();
    const debounced = useDebounce(searchValue, 600);

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]); //Mục đích khi xóa hết thì cho cái popper ko hiển thị nữa
            return;
        }
        setLoading(true); //chỉ set(true )trước khi gọi api còn lại là false
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                // console.log(typeof res);
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [debounced]);

    //Handle
    const handleClear = () => {
        setSearchValue('');
        myRef.current.focus();
        setSearchResult([]);
    };
    //Xử lý trường hợp click ra ngoài muốn onFocus lại thì hiện popper
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
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Account</h4>
                        {searchResult.map((item) => (
                            <AccountItem key={item.id} data={item} />
                        ))}
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

                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon className={cx('close')} icon={faCircleXmark} />
                    </button>
                )}

                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button className={cx('Search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
