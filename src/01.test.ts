import {mult, sum} from "./01";

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



