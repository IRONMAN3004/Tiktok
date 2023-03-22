import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);
const defaultFn = () => {};
function Menu({ children, width, items = [], hideOnClick = false, onChange = defaultFn }) {
    // console.log(onChange);
    // console.log(items);

    const [history, setHistory] = useState([{ data: items }]);
    const curentEnd = history[history.length - 1];

    const renderItems = () => {
        return curentEnd.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        //Xử lý xem có phải là menu nhiều cấp thì render
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item); //để biết xem click vào item nào
                        }
                    }}
                />
            );
        });
    };
    const handleBack = () => {
        //back trên menu đa cấp
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && <Header title="Language" onBack={handleBack} />}

                <div className={cx('menu-scrollable')}> {renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    const handleResetToFirstPage = () => {
        setHistory((prev) => prev.slice(0, 1));
    };
    return (
        <Tippy
            // visible
            delay={[0, 550]}
            offset={[10, 10]}
            hideOnClick={hideOnClick}
            onHidden={handleResetToFirstPage} //khi onHidden tức là hover ra ngoài thì tooltip của tippy làm ...
            interactive // có thuộc tính này để khi có thể hover đc nội dung trong popper
            placement="bottom-end"
            //Đoạn này tức mình tự tạo content nó hiện ra chứ ko dùng mặc định
            render={renderResult}
        >
            {children}
        </Tippy>
    );
}

export default Menu;

/* 
-Note
    tại sao phải tạo component  <PopperWrapper> thì nó là 
    khung modalg hiển thị => </PopperWrapper>để tái sử dụng code  
    nên nó nhận vào 1  prop là children để hiện thị nội dung thôi còn
    bản chất nó chỉ là cái modal bên ngoài css cho đẹp còn nội dung bên trong
    nó thì khác nhau  (mục đíhc tái sử dụng thôi khỏi tạo ra nhiều component)

    bản chất đạon này phải cho dữ liệu của history giống item để render ra dữ liệu
    Ban đầu mình render ra lisitem này nên history mình cho nó bằng cái mảng lần đầu nó 
    luôn render ra phần tử của cuối cùng nên bên trong mảng mình cho nó = object (object
    thì mới thể hiện đưuojc các thông tin.)

    setHistory((prev) => console.log([{ prev, ...item.children }])); //tức ra mình phải 
    push thêm data của children vào prev(state) hiện tại
*/
