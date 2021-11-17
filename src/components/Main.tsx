import { FC } from 'react';
import { useAppSelector } from '../store/hooks';
import InfoWrap from './InfoWrap';
import MainInfo from './MainInfo';
import LoadRing from './LoadRing'
import EducationInfo from './EducationInfo';
import SkillInfo from './SkillInfo';
import '../styles/Main.css'
import ExperienceInfo from './ExperienceInfo';
export const Main: FC<{}> = props => {
    const { userInfo, requestInfo } = useAppSelector(state => state.main);
    const fulfilled = requestInfo.status === 'fulfilled';
    const pending = requestInfo.status === 'pending';
    return (
        <div className='main'>
            {fulfilled ?
                <div className='main-content'>
                    <MainInfo />
                    <InfoWrap title='Education'>
                        {userInfo!.educations.map(
                            (education, i) =>
                                <EducationInfo key={education.degree + i} {...education} />)
                        }
                    </InfoWrap>
                    <InfoWrap title='Experience'>
                        {userInfo!.experience.map(
                            (exp, i) =>
                                <ExperienceInfo key={exp.placeOfWork + i} {...exp} />)
                        }
                    </InfoWrap>
                    <InfoWrap title='Skills'>
                        <div className='skills'>
                            {userInfo!.skills.map(
                                (skill, i) =>
                                    <SkillInfo key={skill + i} skillName={skill} />)
                            }
                        </div>
                    </InfoWrap>
                </div>
                :
                <div className='main-content'>
                    {pending ? <LoadRing /> : ''}
                </div>
            }

        </div>
    );
};
export default Main;