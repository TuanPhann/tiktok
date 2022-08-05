import PropTypes from 'prop-types';
import styles from './poperHeader.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function WrapperHeader({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

WrapperHeader.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
export default WrapperHeader;
