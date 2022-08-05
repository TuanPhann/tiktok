import PropTypes from 'prop-types';
import styles from './button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    btnMenu = false,
    btnMedium = false,
    btnLarge = false,
    btnSmall = false,
    btnGetUp = false,
    btnUpload = false,
    spaceBtn = false,
    leftIcon = false,
    borderTop = false,
    children,
    onClick,
    ...passProp
}) {
    let Comp = 'button';
    let props = {
        onClick,
        ...passProp,
    };

    const classes = cx('btn', {
        btnMedium,
        btnLarge,
        btnSmall,
        btnGetUp,
        btnUpload,
        btnMenu,
        spaceBtn,
        borderTop,
    });

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span>{children}</span>
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    btnMenu: PropTypes.bool,
    btnMedium: PropTypes.bool,
    btnLarge: PropTypes.bool,
    btnSmall: PropTypes.bool,
    btnGetUp: PropTypes.bool,
    btnUpload: PropTypes.bool,
    spaceBtn: PropTypes.bool,
    leftIcon: PropTypes.node,
    borderTop: PropTypes.bool,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};

export default Button;
