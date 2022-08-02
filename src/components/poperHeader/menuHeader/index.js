import styles from './HeaderMenu.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import WrapperHeader from '~/components/poperHeader';
import Menu from './menu';
import HeaderLanguage from './HeaderLanguage';
import { useState } from 'react';

const cx = classNames.bind(styles);

function MenuHeader({ children, items = [] }) {
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
            visible
            placement="top-end"
            interactive
            delay={[400, 600]}
            render={(attrs) => (
                <div className={cx('menu-setting')} tabIndex="-1" {...attrs}>
                    <WrapperHeader className={cx('item-menu')}>
                        {history.length > 1 && (
                            <HeaderLanguage
                                title="Language"
                                onBack={() => {
                                    setHistory((prew) => prew.slice(0, prew.length - 1));
                                }}
                            />
                        )}
                        {renderItem()}
                    </WrapperHeader>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default MenuHeader;
