import { useEffect, useState } from 'react';

function usePageHeight() {
    const [ height, setHeight ] = useState(0);

    useEffect(() => {
        function handleResize() {
            console.log("change size" + document.body.offsetHeight)
            setHeight(document.body.offsetHeight);
        }
        setHeight(document.body.offsetHeight);
        window.addEventListener('load', handleResize);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('load', handleResize);
        };
    }, [])

    return height;
}

export default usePageHeight;