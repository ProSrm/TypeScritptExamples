let name:string ="dkdfjd";
console.log(name);

let age :number=75;
console.log(age);

let isMarried:boolean=true;
console.log(isMarried);

let salary:number[]=[33,44,55,33,];
console.log(salary);

let alphabates :Array<string>=["a","b","c"]
console.log(alphabates);

let person :[string , number]=["shubh",89]
console.log(person);

let anyValue:any=4;
anyValue="Gopal"
anyValue="Gaytri"
console.log(anyValue);

let nullValue:string|null="value";
console.log(nullValue);

let objectValue:object={name:"shubh",age:34};
console.log(objectValue);

// object with specific key and interface 
interface PersonDetails{
    name:string,
    age:number
}
let objectValue2:PersonDetails={name:"sam",age:56};
console.log(objectValue2);


//Usecase: function which is used to throw errors it meant to be 
// to never returns a value. 

function neverReturns():never{
    throw new Error("Error occured while fetching data.");
}

enum enumDirection{
    up='w',
    down='s',
    left='a',
    right='d'
}

console.log(enumDirection.up);


