import styles from './poperHeader.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function WrapperHeader({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

export default WrapperHeader;
