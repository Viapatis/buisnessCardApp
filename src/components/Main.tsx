import { FC } from 'react';
import MainInfo from './MainInfo';
export const main: FC<{}> = props => {

    return (
        <div className='main'>
            <MainInfo></MainInfo>
        </div>
    );
};
export default main;