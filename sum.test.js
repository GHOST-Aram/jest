import {sum, area, capitalize, reverseString} from './sum.js'
import { Calculator } from './calaculator.js'

const calculator = new Calculator()

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
test( 'Add two numbers: ', () =>{
    expect(calculator.add(14, 7)).toEqual(21)
})
test( 'Multiply two numbers: ', () =>{
    expect(calculator.multiply(14, 7)).toEqual(98)
})
test( 'Subtract two numbers: ', () =>{
    expect(calculator.subtract(14, 7)).toEqual(7)
})
test( 'Subtract two numbers: ', () =>{
    expect(calculator.subtract(14, 897)).toEqual(-883)
})
test( 'Divide two numbers: ', () =>{
    expect(calculator.divide(14, 897)).toBeCloseTo(0.01560758082497213)
})
test( 'Area of Triangle: Decimal number dimensions', () =>{
    expect(area(14.99, 7.3)).toBeCloseTo(54.713499999999996)
})
test( 'Area of Triangle: Round figure dimensions', () =>{
    expect(area(140, 70)).toEqual(4900)
})
test( 'Capitalize', () =>{
    expect(capitalize('Elsy')).toMatch(/^ELSY$/)
})
test( 'Reverse String', () =>{
    expect(reverseString('Elsy')).toMatch(/^yslE$/)
})

test('Assign Property and Values: With array referencing ', () =>{
    const obj = {love: 'Life'}
    expect('Life').toBe('Life')
})