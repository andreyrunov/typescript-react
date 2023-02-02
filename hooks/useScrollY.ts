import { useEffect, useState } from "react"

export const useScrollY = (): number => {
    const [scrollY, setScrollY] = useState<number>(0);
    const isBrowser = typeof window !== 'undefined';

    const handleScroll = () => {
        const currentScrollY = isBrowser ? window.scrollY : 0;
        setScrollY(currentScrollY);
    }

    useEffect(() => {
        //в начале подписываемся на scroll
        window.addEventListener('scroll', handleScroll, {passive: true});
        //затем отписываемся при unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return scrollY;
};