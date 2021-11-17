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
                ],
                experience: [
                    {
                        dateStart: '09.01.2019',
                        dateEnd: '07.01.2021',
                        placeOfWork: 'INP SB RAS',
                        position: 'Software Developer',
                        about: 'Software development for automation and data collection systems, mainly in C.'
                    },
                    {
                        dateStart: '12.01.2018',
                        dateEnd: '08.01.2019',
                        placeOfWork: 'Navitel',
                        position: 'Specialist of the technological department of cartography',
                        about: 'Development of automated testing algorithms, mainly using js es5 and bash.'
                    },
                    {
                        dateStart: '09.01.2016',
                        dateEnd: '07.01.2018',
                        placeOfWork: 'INP SB RAS',
                        position: 'Laboratory assistant 4 category',
                        about: 'Developed software in С / С ++ / LabVIEW.'
                    }
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