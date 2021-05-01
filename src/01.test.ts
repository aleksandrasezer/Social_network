import {changeCity, changeJobTitle, guys, GuysType, mult, sum, user} from "./01";


let a: number,
    b: number,
    c:number
beforeEach(() => {
    a = 1
    b = 2
    c = 3
})

test('Mult  should be correct', () => {

    const result1 = mult(a, b),
        result2 = mult(b, c)

    expect(result1).toBe(2)
    expect(result2).toBe(6)
})

test ('Sum should be correct', () => {

    const result1 = sum(a,b),
        result2 = sum(b,c)

    expect(result1).toBe(3)
    expect(result2).toBe(5)
})

test('filter should work', () =>{
    const family = [
        {name: 'Mom', age: 49},
        {name: 'Dad', age: 48},
        {name: 'Dasha', age: 20}
    ]
    const parents = family.filter((mem) => mem.age > 40)
    expect(parents.length).toBe(2)
})

test('map should work', () =>{
    const family = [
        {name: 'Mom', age: 49},
        {name: 'Dad', age: 48},
        {name: 'Dasha', age: 20}
    ]
    family.map((mem) => mem.age -= 1)
    expect(family.length).toBe(3)
    expect(family[0].age).toBe(48)
})

test('new city should work', () => {
    const userWithNewCity = changeCity(user,'Doha')

    expect(userWithNewCity.address).not.toBe(user.address)
    expect(userWithNewCity.address.city).toBe('Doha')
    expect(user.address.city).toBe('Milas')
})

test('Jobtitle should be changed', () => {
    let newGuysArray:GuysType =
        changeJobTitle(guys,'George',1,'Yandex')

    expect(newGuysArray).not.toBe(guys)
    expect(newGuysArray['George']).not.toBe(guys['George'])
    expect(newGuysArray['George'][0].job).toBe('Yandex')
})


