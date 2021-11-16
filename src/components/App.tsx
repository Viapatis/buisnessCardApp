import { FC, useEffect } from 'react';
import { getUserInfo } from '../store/slices/Main';
import { useAppDispatch } from '../store/hooks';
import Header from './Header';
import Main from './Main';
export const App: FC<{}> = props => {
    const dispacth = useAppDispatch();
    useEffect(() => {
        dispacth(getUserInfo());
    })
    return (
        <div className='BuisnessCardApp'>
            <Header></Header>
            <Main></Main>
        </div>
    );
};
export default App;