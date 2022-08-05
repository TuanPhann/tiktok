import PropTypes from 'prop-types';
import styles from './searchAccount.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../images';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function InfoAccount({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('search-account')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('info-account')}>
                <span className={cx('name')}>{data.full_name}</span>
                <span className={cx('search-check')}>{data.tick && <FontAwesomeIcon icon={faCheckCircle} />}</span>
                <p className={cx('addrees')}>{data.nickname}</p>
            </div>
        </Link>
    );
}

InfoAccount.propTypes = {
    data: PropTypes.object.isRequired,
};

export default InfoAccount;
