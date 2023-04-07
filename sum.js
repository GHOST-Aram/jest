export function sum(numbers){
    // return numbers.reduce(
    //     (accumulator, currentValue) => accumulator + currentValue, 0)
    let total = 0
    numbers.forEach(element => {
        total += element
    });
    return total
}

export function area(h, b){
    const area = (b / 2) * h
    return area
}
export function assignObject(object = {}, number){

    return {'love': number}
}
