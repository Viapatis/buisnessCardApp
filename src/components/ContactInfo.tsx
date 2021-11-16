import { FC } from 'react';
interface ContactInfoProps {
    link: string,
    type: string,
    text: string
}
const ContactInfo: FC<ContactInfoProps> = props => {
    const { type, link, text } = props;
    return (
        <div className='contact'>
            <div className='contact-type'> {type}</div>
            <a href={link} className='contact-link'>{text}</a>
        </div>
    )
}
export default ContactInfo;