import { Cypher } from './cypher.js'
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
