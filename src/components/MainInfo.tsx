import { FC } from 'react';
import { useAppSelector } from '../store/hooks';
import pict from '../photo79.png';
import { UserInformation } from '../lib/interfaces';
import { type } from 'os';
interface Contact {
    type: string,
    link: string,
    text: string
}
interface ContactComponentProps {
    link: string,
    type: string,
    text: string
}
const ContactComp: FC<ContactComponentProps> = props => {
    const { type, link, text } = props;
    return (
        <div className='contact'>
            <div className='contact-type'> {type}</div>
            <a href={link} className='contact-link'>{text}</a>
        </div>
    )
}
export const MainInfo: FC<{}> = props => {
    const { name, contacts, location, img } = useAppSelector(state => state.main.userInfo) as UserInformation;
    const typedContacts = contacts.map(contact => getTypedContact(contact));
    return (
        <div className='main-info'>
            <div className='main-info_img-wrap'>
                <img alt='person' src={pict} />
            </div>
            <div className='main-info_content'>
                <h1 className='name'>{name}</h1>
                <div className='sub-info'>
                    <div className='location'>{location}</div>
                    <div className='contacts'>
                        {
                            typedContacts.map((contact, i) => <ContactComp key={contact.type + i} {...contact}></ContactComp>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

function getTypedContact(contact: string): Contact {
    if (contact.match(/^\+?\d+$/))
        return { type: 'phone', link: `tel:${contact}`, text: contact };
    if (contact.match(/^(https:\/\/)?t.me/))
        return { type: 'telegram', link: contact, text: contact.split('/').slice(-1)[0] };
    if (contact.match('.+@.+'))
        return { type: 'email', link: `mailto:${contact}`, text: contact };
    return { type: 'web', link: contact, text: contact.replace(/^https?:/, '') };

}
export default MainInfo;