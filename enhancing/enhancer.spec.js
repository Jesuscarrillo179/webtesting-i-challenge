const { succeed, fail, repair, get , returnZeroIfNegative} = require('./enhancer.js');

const item = {
    name: "shortsword",
    durability: 2,
    enhancement: 2,
}

const item2 = {
    name: "longsword",
    durability: 7,
    enhancement: 20,
}

const item3 = {
    name: "cutlass sword",
    durability: 10,
    enhancement: 15,
}

const item4 = {
    name: "stick",
    durability: 50,
    enhancement: 0,
}

describe('enhancer', () => {
    describe('repair()', () => {
        it('should repair durability to 100', ()  => {
            expect(repair(item)).toBe(100)
        })
    })
    describe('succeed()', () => {
        it('should enhance by 1', ()  => {
            expect(succeed(item)).toBe(item.enhancement + 1)
            expect(succeed(item2)).toBe(20)
        })
    })
    describe('fail()', () => {
        it('should lower durability level', ()  => {
            expect(fail(item3)).toBe(0)
            expect(fail(item4)).toBe(45)
        })
    })
    describe('get()', () => {
        it('get name by enchancement level', ()  => {
            expect(get(item)).toBe(`[+2] shortsword`)
            expect(get(item4)).toBe(`stick`)
        })
    })
})

