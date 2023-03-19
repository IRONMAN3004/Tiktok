import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import images from '~/asset/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faEarthEurope,
    faEllipsisVertical,
    faMagnifyingGlass,
    faSignIn,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

import Tippy from '@tippyjs/react/headless';
// import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Menu from '~/components/Popper/Menu';
import { faKeyboard } from '@fortawesome/free-regular-svg-icons';
// -------------------------------------------------------------------

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthEurope} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 5000);
    }, []);
    const cx = classNames.bind(styles);

    //handle
    const handleMenuItem = (item) => {
        console.log(item);
        switch (item.type) {
            case 'language': {
                console.log('sử lý type language');
                break;
            }
            default:
        }
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="logo tiktok" />
                </div>

                <Tippy
                    // visible={searchResult.length > 0}

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
                        {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
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

                    <Menu
                        width
                        items={MENU_ITEMS}
                        onChange={
                            handleMenuItem
                            //ý nghĩa onChage này là tên prop thôi muốn đặt tên gì cũng đc chứ nó ko phải event onChange
                        }
                    >
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;

/*
--Note 
    //tại sao phải tạo component  <PopperWrapper> thì nó là 
    modal hiển thị => </PopperWrapper>để tái sử dụng code  
    nên nó nhận vào 1  prop là children để hiện thị nội dung thôi còn
    bản chất nó chỉ là cái khung bên ngoài css cho đẹp còn nội dung bên trong
    nó thì khác nhau  (mục đíhc tái sử dụng thôi khỏi tạo ra nhiều component)
                            
*/
