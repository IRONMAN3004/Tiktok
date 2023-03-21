import { forwardRef, useState } from 'react';
import images from '~/asset/images';
import styles from './Image.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Image = forwardRef(({ className, src, fallback = images.no_image, alt, ...props }, ref) => {
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
