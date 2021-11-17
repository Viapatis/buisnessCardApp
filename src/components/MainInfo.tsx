import { FC,  useEffect } from 'react';
import { useAppSelector } from '../store/hooks';
import pict from '../photo79.png';
import ContactInfo from './ContactInfo'
import { useScrollToElement } from './hooks';
interface Contact {
    type: string,
    link: string,
    text: string
}
export const MainInfo: FC<{}> = props => {
    const { name, contacts, location, img } = useAppSelector(state => state.main.userInfo)!;
    const typedContacts = contacts.map(contact => getTypedContact(contact));
    const [divRef,scrollToElement]=useScrollToElement('base');
    useEffect(() => {
        scrollToElement()
    })
    return (
        <div ref={divRef} className='main-info'>
            <div className='main-info_img-wrap'>
                <img alt='person' src={pict} />
            </div>
            <div className='main-info_content'>
                <h1 className='name'>{name}</h1>
                <div className='sub-info'>
                    <div className='location'>{location}</div>
                    <div className='contacts'>
                        {
                            typedContacts.map((contact, i) => <ContactInfo key={contact.type + i} {...contact}></ContactInfo>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

function getTypedContact(contact: string): Contact {
    if (contact.match(/^\+?\d+$/))
        return { type: 'Phone', link: `tel:${contact}`, text: contact };
    if (contact.match(/^(https:\/\/)?t.me/))
        return { type: 'Telegram', link: contact, text: contact.split('/').slice(-1)[0] };
    if (contact.match('.+@.+'))
        return { type: 'Email', link: `mailto:${contact}`, text: contact };
    return { type: 'Web', link: contact, text: contact.replace(/^https?:/, '') };

}
export default MainInfo;