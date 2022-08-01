import styles from './poperHeader.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function WrapperHeader({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default WrapperHeader;
