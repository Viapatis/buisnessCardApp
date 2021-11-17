import { FC } from 'react';
import { Education } from '../lib/interfaces';
import '../styles/EducationInfo.css';
import { formatingDateString } from '../lib/formatingDate';
export const EducationInfo: FC<Education> = props => {
    const { university,
        derictionName,
        degree,
        faculty } = props;
    const dateStart = formatingDateString(props.dateStart);
    const dateEnd = formatingDateString(props.dateEnd);
    return (
        <div className='education'>
            <div className='education-date'> <div>{dateStart}</div> — <div>{dateEnd}</div></div>
            <div className='education-content'>
                <div className='degree'>{degree}</div>
                <div className='university'>{university}</div>
                <div className='subInfo'>
                    <span className='faculty'>{faculty}</span>,
                    <span className='deriction-name'> {derictionName}</span>
                </div>
            </div>
        </div>
    );
};
export default EducationInfo;