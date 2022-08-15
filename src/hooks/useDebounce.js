import { useState, useEffect } from 'react';

function UseDebounce(value, delay) {
    const [debounceInput, setDebounceInput] = useState(value);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setDebounceInput(value);
        }, delay);
        return () => clearTimeout(timeOut);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debounceInput;
}

export default UseDebounce;
