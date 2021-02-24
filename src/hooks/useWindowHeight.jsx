import { useEffect, useState } from 'react';

function useWindowHeight() {
    const [ height, setHeight ] = useState(0);

    useEffect(() => {
        function handleResize() {
            console.log("change size" + window.innerHeight)
            setHeight(window.innerHeight);
        }
        setHeight(window.innerHeight);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return height;
}

export default useWindowHeight;