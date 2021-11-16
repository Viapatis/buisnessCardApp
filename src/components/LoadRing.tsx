import { FC } from 'react';
import { useAppSelector } from '../store/hooks';
export const MainInfo: FC<{}> = props => {
    const userInfo = useAppSelector(state => state.main.userInfo);
    return (
        <div className='load'>
            <div className="load-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};
export default MainInfo;
