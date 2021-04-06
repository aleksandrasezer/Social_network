export function mult(a:number,b: number) {
    return a * b
}

export function sum(a: number,b: number) {
    return a + b
}

type FamilyMember = {
    id: number
    title: string
}

type CityType = {
    size: number
    numberOfPeople: number
    ourFamily: Array<FamilyMember>
}

const city: CityType = {
    size: 1000,
    numberOfPeople: 180000,
    ourFamily: [
        {
            id: 1,
            title: 'mom'
        },
        {
            id: 2,
            title: 'dad'
        },
        {
            id: 3,
            title: 'Dasha'
        },
        {
            id: 4,
            title: 'me'
        }
    ]
}
