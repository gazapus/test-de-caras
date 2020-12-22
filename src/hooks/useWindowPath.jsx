import { useEffect, useState } from 'react';

function useWindowPath() {
    const [ path, setPath ] = useState('');

    useEffect(() => {
        function handleChange() {
            setPath(window.location.href)
            console.log("change path: " + window.location.href)
        }
        handleChange()
        window.addEventListener('hashchange', handleChange);
        return () => window.removeEventListener('hashchange', handleChange);
    }, [])

    return path;
}

export default useWindowPath;