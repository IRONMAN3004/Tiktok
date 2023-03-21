import {
    faArrowRightFromBracket,
    faCircleQuestion,
    faCoins,
    faEarthEurope,
    faEllipsisVertical,
    faGear,
    faSignIn,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import images from '~/asset/images';
import routesConfig from '~/config/routes';

import Button from '~/components/Button';

import { Link } from 'react-router-dom';
import { default as Tippy, default as Tippys } from '@tippyjs/react';

import { faKeyboard } from '@fortawesome/free-regular-svg-icons';
import 'tippy.js/dist/tippy.css';
import { MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '~/components/Layout/components/Search';
import Menu from '~/components/Popper/Menu';
import styles from './Header.module.scss';
import { useState } from 'react';
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
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
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
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
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
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/yboy',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const [curentUser, setCurentUser] = useState(false);
    // const curentUser = false;
    // const curentUser = true;

    const cx = classNames.bind(styles);

    //handle
    const handleMenuItem = (item) => {
        // console.log(item);
        switch (item.type) {
            case 'language': {
                console.log('sử lý type language');
                break;
            }
            default:
        }
    };

    const userMenu = [
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Feedback and help',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coins',
            to: '/get Coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },
        // ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Log out',
            to: '/logout',
            sepatate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    {/* <img src={images.logo} alt="logo tiktok" /> */}
                    <Link to={routesConfig.home}>
                        <Image src={images.logo} />
                    </Link>
                </div>

                {/* {Search} */}
                <Search />

                <div className={cx('action')}>
                    {curentUser ? (
                        <>
                            <Tippy delay={[0, 100]} content="Upload Video" interactive="true" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon className={cx('Icon', 'IconUpload')} />
                                </button>
                            </Tippy>

                            <Tippys delay={[0, 100]} content="Message" interactive="true" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippys>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            {/* Trường hợp tự custom ở 1 file khác chứ ko phải ở component custom thì thêm classname vào className={cx('custom-login')}} */}
                            <Button
                                primary
                                rightIcon={<FontAwesomeIcon icon={faSignIn} />}
                                onClick={() => {
                                    setCurentUser(true);
                                }}
                            >
                                Login
                            </Button>
                        </>
                    )}

                    <Menu
                        width
                        items={userMenu ? userMenu : MENU_ITEMS}
                        onChange={
                            handleMenuItem
                            //ý nghĩa onChage này là tên prop thôi muốn đặt tên gì cũng đc chứ nó ko phải event onChange
                        }
                    >
                        {curentUser ? (
                            <Image
                                onClick={() => {
                                    setCurentUser(false);
                                }}
                                hideonClick={true}
                                className={cx('user-avatar')}
                                src="https://upload.wikimedia.org/wikipeia/commons/2/23/Cristiano_Ronaldo_WC2022_-_01.jpg"
                                alt="Avatar account"
                                fallback="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Manchester_United_v_Villarreal_CF%2C_29_September_2021_%2824%29.jpg/250px-Manchester_United_v_Villarreal_CF%2C_29_September_2021_%2824%29.jpg"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
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
