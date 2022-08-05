import { useState, useEffect, useRef } from 'react';

import styles from './search.module.scss';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import WrapperHeader from '~/components/poperHeader';
import InfoAccount from '~/components/searchAccount';
import UseDebounce from '~/hooks/useDebounce';
import request from '~/utils/request';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchAccount, setSearchAccount] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const DebounceValue = UseDebounce(searchValue, 500);

    useEffect(() => {
        if (!DebounceValue) {
            setSearchAccount([]);
            return;
        }

        setLoading(true);

        request
            .get('users/search', {
                params: {
                    q: DebounceValue,
                    type: 'less',
                },
            })

            .then((res) => {
                setSearchAccount(res.data.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [DebounceValue]);

    const elInput = useRef();

    const handleClearInput = () => {
        setSearchValue('');
        setSearchAccount([]);
        elInput.current.focus();
    };

    const handleSpaceInput = (e) => {
        const searchValueInput = e.target.value;
        if (!searchValueInput.startsWith(' ')) {
            setSearchValue(searchValueInput);
        }
    };

    return (
        <div className={cx('wrapperInput')}>
            <HeadlessTippy
                interactive
                visible={showResult && searchAccount.length > 0}
                render={(attrs) => (
                    <div className={cx('result')} tabIndex="-1" {...attrs}>
                        <WrapperHeader>
                            <div className={cx('account')}>
                                <h4>Account</h4>
                            </div>
                            {searchAccount.map((result) => {
                                return <InfoAccount key={result.id} data={result} />;
                            })}
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
                            onChange={handleSpaceInput}
                            onFocus={() => setShowResult(true)}
                        />
                        {!!searchValue && !loading && (
                            <button className={cx('close')} onClick={handleClearInput}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                        )}
                        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    </>

                    <button className={cx('btn-search')} onMouseDown={(e) => e.preventDefault()}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
