import { useRef, RefObject } from "react";
import { useLocation } from "react-router";

export const useScrollToElement = (path: string): [RefObject<HTMLDivElement>, () => void] => {
    const divRef = useRef<HTMLDivElement>(null);
    const location = useLocation();
    return [divRef, () => {
        if (location.pathname === `/${path}`) {
            window.scrollTo({ left: 0, top: divRef.current!.offsetTop, behavior: 'smooth' });
        }
    }]
}