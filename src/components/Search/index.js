import { useState, useEffect, useRef } from 'react';
import styles from './search.module.scss';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import WrapperHeader from '~/components/poperHeader';
import InfoAccount from '~/components/searchAccount';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchAccount, setSearchAccount] = useState([]);
    const [showResult, setShowResult] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setSearchAccount([1, 2, 3]);
        }, 0);
    }, []);

    const elInput = useRef();

    const handleClearInput = () => {
        setSearchValue('');
        setSearchAccount([]);
        elInput.current.focus();
    };
    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchAccount.length > 0}
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
            onClickOutside={() => setShowResult(false)}
        >
            <div className={cx('search')}>
                <>
                    <input
                        ref={elInput}
                        value={searchValue}
                        placeholder="Secrch account and videos"
                        spellCheck={false}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && (
                        <button className={cx('close')} onClick={handleClearInput}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
                </>

                <button className={cx('btn-search')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
