let sales: number = 12_345;
let course: string = 'Typescript';
let is_published: boolean = true;

let numbers: number[] = [1, 2, 3];

numbers.forEach(n => n.toString)

const enum Size {Small = 1, Medium = 2, Large = 3}

let mySize: Size = Size.Medium
console.log(mySize);

// properly annotating functions
function calculateTax(income: number, taxYear = 2022) : number {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}

calculateTax(10_000, 2022);