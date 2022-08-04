import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './image.module.scss';

const Image = forwardRef(({ src, alt, className, ...prop }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(images.noImage);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            {...prop}
            alt={alt}
            onError={handleError}
        />
    );
});
export default Image;
