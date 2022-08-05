import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';

import routes from '~/config/routes';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faEllipsisVertical,
    faGlobe,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import MenuHeader from '~/components/poperHeader/menuHeader';
import { InboxIcon, MessageIcon } from '~/components/icons';
import Image from '~/components/images';
import Search from '~/components/Search';

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
    const currentUser = true;

    const ITEM_USER = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@aTuanPhan',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coin',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },
        ...INFO_MENU,

        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Log out',
            to: '/logout',
            bordertop: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo-tiktok')}>
                    <Link to={routes.home}>
                        <img src={images.logo} alt="logo tiktok" />
                    </Link>
                </div>

                <Search />

                <div className={cx('header-right')}>
                    <Button to={`/upload`} btnUpload spaceBtn leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Upload
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy delay={[100, 300]} content="Message">
                                <button className={cx('btn-chat')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>

                            <Tippy delay={[100, 300]} content="Inbox">
                                <button className={cx('btn-chat')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button btnMedium spaceBtn>
                                Login
                            </Button>
                        </>
                    )}
                    <MenuHeader items={currentUser ? ITEM_USER : INFO_MENU}>
                        {currentUser ? (
                            <Image
                                className={cx('avatar-user')}
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/ddcb57a7bcd8bf0fc01c18338b2caf59.jpeg?x-expires=1659528000&x-signature=GHCgARQ546fZ7qbwNj%2B%2FT321PGo%3D"
                                alt="avatar user"
                            />
                        ) : (
                            <button className={cx('btn-menu')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </MenuHeader>
                </div>
            </div>
        </header>
    );
}

export default Header;
