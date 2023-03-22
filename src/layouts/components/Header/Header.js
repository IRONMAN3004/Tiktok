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
import config from '~/config';

import Button from '~/components/Button/Button';

import { Link } from 'react-router-dom';
import { default as Tippy, default as Tippys } from '@tippyjs/react';

import { faKeyboard } from '@fortawesome/free-regular-svg-icons';
import 'tippy.js/dist/tippy.css';
import { MessageIcon, UploadIcon } from '~/components/Icons/Icon';
import Image from '~/components/Image/Image';
import Search from '~/layouts/components/Search/Search';
import Menu from '~/components/Popper/Menu/Menu';
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
        //do giá trị của prop là 1 function nên kia component con gọi có thể truyền giá trị lại đây nên nhận đc value gửi về component cha
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
                    <Link to={config.routes.home}>
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
