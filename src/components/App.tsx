import { FC, useEffect } from 'react';
import { getUserInfo } from '../store/slices/Main';
import { useAppDispatch } from '../store/hooks';
import Header from './Header';
import Main from './Main';
import '../styles/App.css'
export const App: FC<{}> = props => {
    const dispacth = useAppDispatch();
    useEffect(() => {
        dispacth(getUserInfo());
    })
    return (
        <div className='BuisnessCardApp'>
            <Header/>
            <Main/>
        </div>
    );
};
export default App;