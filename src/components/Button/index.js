import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

function Button({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    disable = false,
    rounded = false,
    small = false,
    large = false, //ko truyền trong component cha thì mặc định nó lấy giá trị default là false
    children,
    onClick,
    className,
    leftIcon,
    rightIcon,
    ...passProp // trường hợp những props xuất hiện đột xuất
}) {
    const cx = classNames.bind(styles);
    // let Comp = 'p';
    let Comp = 'button';

    const classes = cx('wrapper', {
        primary,
        // primary: primary,
        [className]: className, //lấy giá trị
        outline,
        small,
        large,
        text,
        disable,
        rounded,
    });

    const _props = {
        onClick,
        ...passProp,
    };

    //Remove event listerner when button is disable
    if (disable) {
        // delete _props.onClick;
        //  console.log(Object.keys(_props)); // Object.keys(_props) trả về 1 mảng gồm các key của object oput: ['onClick', 'onMouseUp']

        Object.keys(_props).forEach((key) => {
            if (key.startsWith('on') && typeof _props[key] === 'function') {
                // console.log(_props[key]); //tức lấy value của key(biến) là key
                // console.log(key);
                delete _props[key];
            }
        });
    }

    if (to) {
        _props.to = to; //đây là cách gán thêm thuộc tính mới cho đối tượng sau khi đã khai báo
        Comp = Link;
    } else if (href) {
        _props.href = href;
        Comp = 'a';
    }
    // console.log(leftIcon);

    return (
        <Comp className={classes} {..._props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
