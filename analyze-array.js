export class ArrayAnalyzer{
    constructor(){

    }

    analyze(array){
        array.sort((a,b) => a - b)
        //Get total
        const total = array.reduce((accumulater, currentVAlue) => accumulater + currentVAlue, 0)
        return {
            average: total/array.length,
            min: array[0],
            max: array[array.length - 1],
            length: array.length
        }
    }
}