import PropTypes from 'prop-types';
import styles from './HeaderMenu.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import WrapperHeader from '~/components/poperHeader';
import Menu from './menu';
import HeaderLanguage from './HeaderLanguage';
import { useState } from 'react';

const cx = classNames.bind(styles);

function MenuHeader({ children, items = [], hideonClick = false }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <Menu
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prew) => [...prew, item.children]);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            offset={[20, 14]}
            placement="top-end"
            interactive
            hideOnClick={hideonClick}
            delay={[300, 400]}
            render={(attrs) => (
                <div className={cx('menu-setting')} tabIndex="-1" {...attrs}>
                    <WrapperHeader className={cx('item-menu')}>
                        {history.length > 1 && (
                            <HeaderLanguage
                                title={current.title}
                                onBack={() => {
                                    setHistory((prew) => prew.slice(0, prew.length - 1));
                                }}
                            />
                        )}
                        <div className={cx('menu-language')}> {renderItem()}</div>
                    </WrapperHeader>
                </div>
            )}
            onHide={() => setHistory((prew) => prew.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

MenuHeader.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideonClick: PropTypes.bool,
};
export default MenuHeader;
