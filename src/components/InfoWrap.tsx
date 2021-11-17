import { FC, useEffect } from 'react';
import { useScrollToElement } from './hooks';
interface InfoWrapProps {
    title: string,
}
export const InfoWrap: FC<InfoWrapProps> = props => {
    const { title, children } = props;
    const [divRef, scrollToElement] = useScrollToElement(title.toLowerCase());
    useEffect(() => {
        scrollToElement();
    })
    return (
        <div ref={divRef} className='info-wrap'>
            <h2 className='info-wrap_title'>{title}</h2>
            <div className='info-wrap_content'>{children}</div>
        </div>
    );
};
export default InfoWrap;