import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Image from '~/components/Image';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';
import styles from './SuggestedAccount.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    //handle
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <>
            {data.map((item, index) => (
                <Tippy
                    key={index}
                    interactive
                    delay={[800, 0]}
                    offset={[-3, 6]}
                    placement="bottom"
                    render={renderPreview}
                >
                    <div className={cx('account-item')}>
                        <Image className={cx('avatar')} src={item.src} alt="" />
                        <div className={cx('item-info')}>
                            <p className={cx('nickname')}>
                                <strong>{item.nickname}</strong>
                                {item.icon && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                            </p>
                            <p className={cx('name')}>{item.name}</p>
                        </div>
                    </div>
                </Tippy>
            ))}
        </>
    );
}

AccountItem.propTypes = {};

export default AccountItem;

/* 
 muốn làm srcoll bar
từ đầu mình sét height cho nó khi mình nhấn see all thì height
 thay đổi thì dùng js để lấy chiều cao của thành phần đó để biết 
 khi nào height thay đổi
*/
