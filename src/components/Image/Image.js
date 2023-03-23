import { forwardRef, useState } from 'react';
import images from '~/asset/images';
import styles from './Image.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Image = forwardRef(({ className, src, fallback = images.fallBack_no_image_ironman, alt, ...props }, ref) => {
    const [_fallback, setFallback] = useState('');

    // console.log(fallback);
    const handleError = () => {
        setFallback(fallback);
    };

    return (
        <img
            {...props}
            className={cx('wrapper', className)}
            src={_fallback || src}
            ref={ref}
            alt={alt}
            onError={handleError}
        />
    );
});

export default Image;

/* 
--Note
_case không truyền vàp prop fallback thì nó sẽ lấy ảnh ko images/asset
 còn nếu truyền vào thì nó lấy giá trị của prop truyền vào mục đích
 để tại mỗi lần mình tái sử dụng thì muốn hình ảnh khi bị lỗi nó sẽ khác nhau

*/
