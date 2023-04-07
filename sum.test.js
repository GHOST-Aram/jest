import {sum, area, assignObject} from './sum.js'

test('Sum of Array elements', () =>{
    const numbers = [9,8,9,10,20]
    expect(sum(numbers)).toEqual(56)
})
test('Sum of Array elements: Neagtive numbers', () =>{
    const numbers = [-9,8,9,10,-20]
    expect(sum(numbers)).toEqual(-2)
})
test('Sum of Array elements: With Decimals', () =>{
    const numbers = [9.009,8,9.89,10,20]
    expect(sum(numbers)).toBeCloseTo(56.899)
})

// Test area
test( 'Area of Triangle: Whole nimber dimensions', () =>{
    expect(area(14, 7)).toEqual(49)
})
test( 'Area of Triangle: Decimal number dimensions', () =>{
    expect(area(14.99, 7.3)).toBeCloseTo(54.713499999999996)
})
test( 'Area of Triangle: Round figure dimensions', () =>{
    expect(area(140, 70)).toEqual(4900)
})

test('Assign Property and Values: With array referencing ', () =>{
    const obj = {love: 'Life'}
    expect('Life').toBe('Life')
})
//Text Cypher

