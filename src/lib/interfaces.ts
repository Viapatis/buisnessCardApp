export interface Education {
    university: string,
    deriction: string,
    derictionName: string,
    degree: string,
    dateStart: string,
    dateEnd: string,
    faculty: string
}

export interface UserInformation {
    name: string,
    dateOfBirth: string,
    img: string,
    location: string,
    contacts: string[],
    educations: Education[],
    skills: string[]
}

