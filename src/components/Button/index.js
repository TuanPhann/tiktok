import styles from './button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

export default Button;
