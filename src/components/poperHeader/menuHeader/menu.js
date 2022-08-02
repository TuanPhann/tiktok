import Button from '~/components/Button';
import styles from './HeaderMenu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Menu({ data, onClick }) {
    return (
        <Button btnMenu to={data.to} leftIcon={data.icon} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default Menu;
