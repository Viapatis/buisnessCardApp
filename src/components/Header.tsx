import { FC } from 'react';
import { useAppSelector } from '../store/hooks';
import { Link } from 'react-router-dom';
import '../styles/Header.css'
export const Header: FC<{}> = props => {
    const { menuItems } = useAppSelector(state => state.header);

    return (
        <div className='header'>
            <div className='menu'>
                {Object.keys(menuItems).map(key =>
                    <Link to={`/${key}`} key={key} className='navigate-link'>{menuItems[key]}</Link>)
                }
            </div>
        </div>
    );
};
export default Header;