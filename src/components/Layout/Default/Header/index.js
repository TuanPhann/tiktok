import React, { useState, useEffect } from 'react';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import Tippy from '@tippyjs/react/headless';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faPlus,
    faEllipsisVertical,
    faGlobe,
    faCircleQuestion,
    faKeyboard,
} from '@fortawesome/free-solid-svg-icons';
import WrapperHeader from '~/components/poperHeader';
import InfoAccount from '~/components/searchAccount';
import Button from '~/components/Button';
import MenuHeader from '~/components/poperHeader/menuHeader';

const cx = classNames.bind(styles);

const INFO_MENU = [
    {
        icon: <FontAwesomeIcon icon={faGlobe} />,
        title: 'English',
        children: {
            title: 'language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcut',
    },
];

function Header() {
    const [searchAccount, setSearchAccount] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchAccount([]);
        }, 2000);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo-tiktok')}>
                    <img src={images.logo} alt="logo tiktok" />
                </div>

                <Tippy
                    interactive
                    visible={searchAccount.length > 0}
                    render={(attrs) => (
                        <div className={cx('result')} tabIndex="-1" {...attrs}>
                            <WrapperHeader>
                                <div className={cx('account')}>
                                    <h4>Account</h4>
                                </div>
                                <InfoAccount />
                                <InfoAccount />
                                <InfoAccount />
                                <InfoAccount />
                                <InfoAccount />
                            </WrapperHeader>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Secrch account and videos" spellCheck={false} />
                        <button className={cx('close')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('btn-search')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>

                <div className={cx('header-right')}>
                    <Button btnUpload spaceBtn leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Upload
                    </Button>
                    <Button btnMedium spaceBtn>
                        Login
                    </Button>
                    <MenuHeader items={INFO_MENU}>
                        <button className={cx('btn-menu')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </MenuHeader>
                </div>
            </div>
        </header>
    );
}

export default Header;
