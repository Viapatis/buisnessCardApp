import { UserInformation, Education } from './interfaces'
function getUserInfo() {
    return pseudoApiCall() as Promise<UserInformation>;
}

function pseudoApiCall() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: 'Andrew Kiselev',
                dateOfBirth: 'Jun 03 1996',
                img: '',
                location: 'Russian Federation, Novosibirsk',
                contacts: ['+79529452454', 'aannddreika@gmail.com', 'https://t.me/umr_atTavil'],
                educations: [
                    genEduInfoObjNSTUandPAT('03.03.02', 'Physics', 'Aug 01 2014', 'Jun 20 2018', 'Bachelor'),
                    genEduInfoObjNSTUandPAT('03.03.02', 'Physics', 'Aug 01 2018', 'Jun 23 2021', 'Master')
                ],
                skills: [
                    'JavaScript',
                    'HTML',
                    'CSS',
                    'React',
                    'Redux',
                    'Git',
                    'C++',
                    'MATLAB',
                    'Mathcad',
                    'AutoCAD',
                    'Proteus ISIS',
                    'Java'
                ]
            })
        }, 500)
    })
}
function genEduInfoObjNSTUandPAT(
    deriction: string,
    derictionName: string,
    dateStart: string,
    dateEnd: string,
    degree: string)
    :
    Education {
    return {
        university: 'Novosibirsk State Technical University',
        deriction: deriction,
        derictionName: derictionName,
        dateStart: dateStart,
        dateEnd: dateEnd,
        degree: degree,
        faculty: 'Physics and Technology Faculty'
    }
}
export default { getUserInfo: getUserInfo }