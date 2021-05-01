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
        {id: 1, title: 'mom'},
        {id: 2, title: 'dad'},
        {id: 3, title: 'Dasha'},
        {id: 4, title: 'me'}
    ]
}
export const user: UserType = {
    name: 'Alex',
    age: 28,
    address: {city: 'Milas', years: 1}
}
export type UserType = {
    name: string
    age: number
    address: {city: string, years: number}
}
export const changeCity = (u: UserType, newCity: string) => {
    const newAlex: UserType = {
        ...u,
        address: {
            ...u.address,
            city: newCity
        }
    }
    return newAlex
}
type ChangeJobTitleType = (arr: GuysType,name:string,id:number,newTitle:string) => GuysType
export type GuysType = {
    [key:string]: {id:number,job:string}[],
    // @ts-ignore
    [key:string]: {id:number,job:string}[]
}
export  const guys:GuysType = {
    'George': [{id:1,job: 'Epam'},{id:2,job: 'Google'}],
    'Chris': [{id:1,job: 'Apple'},{id:2, job: 'Amazon'}]
}
export const changeJobTitle:ChangeJobTitleType = (users:GuysType,name,id,newTitle) => {
    return {...users, [name]: users[name].map((g) =>
        g.id === id ? {...g, job: newTitle} : g)}
}