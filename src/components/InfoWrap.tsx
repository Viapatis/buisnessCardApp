import { FC } from 'react';
interface InfoWrapProps {
    title: string
}
export const InfoWrap: FC<InfoWrapProps> = props => {
    const { title, children } = props;
    return (
        <div className='info-wrap'>
            <h2 className='info-wrap_title'>{title}</h2>
            <div className='info-wrap_content'>{children}</div>
        </div>
    );
};
export default InfoWrap;