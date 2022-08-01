import styles from './searchAccount.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function InfoAccount() {
    return (
        <div className={cx('search-account')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/ddcb57a7bcd8bf0fc01c18338b2caf59.jpeg?x-expires=1659528000&x-signature=GHCgARQ546fZ7qbwNj%2B%2FT321PGo%3D"
                alt="img avatar"
            />
            <div className={cx('info-account')}>
                <span className={cx('name')}>Nguyen van A</span>
                <span className={cx('search-check')}>
                    <FontAwesomeIcon icon={faCheckCircle} />
                </span>
                <p className={cx('addrees')}>Nguyen van B</p>
            </div>
        </div>
    );
}

export default InfoAccount;
