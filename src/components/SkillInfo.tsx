import { FC } from 'react';
import '../styles/SkillInfo.css'
interface SkillInfoProps {
    skillName: string
}
const SkillInfo: FC<SkillInfoProps> = props => {
    const { skillName } = props;
    return (
        <div className='skill'>
            {skillName}
        </div>
    )
}
export default SkillInfo;