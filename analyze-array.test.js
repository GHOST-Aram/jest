import { ArrayAnalyzer } from "./analyze-array.js";

const analyzer = new ArrayAnalyzer()

test('Work for sorted array:', () =>{
    const analysis = analyzer.analyze([1,2,3,4,5,6,7])
    expect(analysis.average).toBeCloseTo(4)
    expect(analysis.min).toEqual(1)
    expect(analysis.max).toEqual(7)
    expect(analysis.length).toEqual(7)
})

test('Work for unsorted array:', () =>{
    const analysis = analyzer.analyze([7, 2, 12,54,0,17])
    expect(analysis.average).toBeCloseTo(15.3333333333)
    expect(analysis.min).toEqual(0)
    expect(analysis.max).toEqual(54)
    expect(analysis.length).toEqual(6)
})

test('Work for array with both negative and positive numbers:', () =>{
    const analysis = analyzer.analyze([19, -9, 12, -7, -199])
    expect(analysis.average).toBeCloseTo(-36.8)
    expect(analysis.min).toEqual(-199)
    expect(analysis.max).toEqual(19)
    expect(analysis.length).toEqual(5)
})