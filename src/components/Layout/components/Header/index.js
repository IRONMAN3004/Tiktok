import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/asset/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const cx = classNames.bind(styles);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="logo tiktok" />
                </div>

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

                <div className={cx('action')}></div>
            </div>
        </header>
    );
}

export default Header;
