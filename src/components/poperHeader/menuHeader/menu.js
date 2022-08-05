import PropTypes from 'prop-types';
import Button from '~/components/Button';
// import styles from './HeaderMenu.module.scss';
// import classNames from 'classnames/bind';

function Menu({ data, onClick }) {
    return (
        <Button btnMenu to={data.to} leftIcon={data.icon} onClick={onClick}>
            {data.title}
        </Button>
    );
}

Menu.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};
export default Menu;
