import {sum, area, assignObject} from './sum.js'
import { Cypher } from './cypher.js'

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
const cypher = new Cypher()

test('Encrypt One word: ',()=>{
    const word = 'school'
    expect(cypher.ceasarCypher(word,1)).toBe('tdippm')
})

test('Encrypt two words separated with space: ',()=>{
    const word = 'school boy'
    expect(cypher.ceasarCypher(word,1)).toBe('tdippm cpz')
})

test('Encrypt  Long Sentense: ',()=>{
    const word = 'school boy needs to be obidient'
    expect(cypher.ceasarCypher(word,1)).toBe('tdippm cpz offet up cf pcjejfou')
})

test('Should work for mixed upper and lower case: ',()=>{
    const word = 'IBM computers and NASA'
    expect(cypher.ceasarCypher(word,1)).toBe('JCN dpnqvufst boe OBTB')
})

test('Should work for Punctuated sentences: ',()=>{
    const word = 'What!? I really, really hope you are safe.'
    expect(cypher.ceasarCypher(word,1)).toBe('Xibu!? J sfbmmz, sfbmmz ipqf zpv bsf tbgf.')
})

test('Should circulate the alphabet from z back to a: ',()=>{
    const word = 'Zebras'
    expect(cypher.ceasarCypher(word,1)).toBe('Afcsbt')
})

test('Should work for wide shift ',()=>{
    const word = 'Zebras'
    expect(cypher.ceasarCypher(word,12)).toBe('Lqndme')
})

