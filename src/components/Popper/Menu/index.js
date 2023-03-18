import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, width, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };

    return (
        <>
            <Tippy
                // visible
                delay={[0, 550]}
                interactive // có thuộc tính này để khi có thể hover đc nội dung trong popper
                placement="bottom-end"
                //Đoạn này tức mình tự tạo content nó hiện ra chứ ko dùng mặc định
                render={(attrs) => (
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('menu-popper')}>
                            {/* <h2 className={cx('sear')}>Menu-item</h2> */}
                            {renderItems()}
                        </PopperWrapper>
                        {/* //tại sao phải tạo component  <PopperWrapper> thì nó là 
                            ô vuông hiển thị => </PopperWrapper>để tái sử dụng code  
                            nên nó nhận vào 1  prop là children để hiện thị nội dung thôi còn
                            bản chất nó chỉ là cái khung bên ngoài css cho đẹp còn nội dung bên trong
                            nó thì khác nhau  (mục đíhc tái sử dụng thôi khỏi tạo ra nhiều component)
                            */}
                    </div>
                )}
            >
                {children}
            </Tippy>
        </>
    );
}

export default Menu;
