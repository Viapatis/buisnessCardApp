import { FC } from 'react';
import { Experience } from '../lib/interfaces';
import '../styles/ExperienceInfo.css'
import { formatingDateString } from '../lib/formatingDate';
export const ExperienceInfo: FC<Experience> = props => {
    const { placeOfWork, position, about } = props;
    const dateStart = formatingDateString(props.dateStart);
    const dateEnd = formatingDateString(props.dateEnd);
    return (
        <div className='experience'>
            <div className='experience-date'> <div>{dateStart}</div> — <div>{dateEnd}</div></div>
            <div className='experience-content'>
                <div className='place'>{placeOfWork}</div>
                <div className='position'>{position}</div>
                <div className='about'>{about}</div>
            </div>
        </div>
    );
};
export default ExperienceInfo;