import { FC } from 'react';
import { Education } from '../lib/interfaces';
import '../styles/EducationInfo.css'
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

function formatingDateString(dateStr: string) {
    const date = new Date(dateStr);
    const options = { month: 'long', year: 'numeric' } as Intl.DateTimeFormatOptions;
    return date.toLocaleDateString('en-US', options);
}
export default EducationInfo;