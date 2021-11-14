

// Basic Types
let id: number = 5;
console.log('ID: ', id)
let company: string = 'Traversy Media';
let isPublished: boolean = true;
let x: any = 'Hello';


let ids: number[] = [1,2,3,4,5];
// ids.push('Hello');
let arr: any[] = [1, true, 'Hello'];

// Tuple
let person: [number, string, boolean] = [1, 'Brad', true];

//Tuple Array
let employee: [number, string] []

employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill'],
]

// Union
let pid: string | number = 22;
pid = '22'

// Enum
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right,
}

console.log('Enum Direction1', Direction1.Up);

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}

console.log('Enum Direction2', Direction2.Left);

// Objects
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'John',
}

// Type Assertion
let cid: any = 1;
// let customerId: <number>cid;
let customerId = cid as number

// Functions
function  addNum(x: number, y: number): number {
    return x * y;
}

console.log('addNum', addNum( 3, 4));


// Void
function  log(message: string | number): void {
    console.log(message);
}

// console.log(log(true));
console.log(log("Hello 2021 year"));


// Iterfaces
interface IUserInterface {
    readonly id: number,
    name: string,
    isAdmin: boolean
}

const user1: IUserInterface = {
    id: 1,
    name: 'Zak',
    isAdmin: false
}

type Point = number | string;
const p1: Point = '1';

// user1.id = 4; // Attempt to assign to const or readonly variable

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

interface IPersonInterface {
    id: number,
    name: string,
    register(): string
}

// Classes
class Person implements IPersonInterface{
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const brad = new Person(1, 'Brad Traversy');
const mike = new Person(2, 'Mike Jordan');

console.log(brad, mike);
console.log(brad.register());


// Subclasses
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name);
        this.position = position;
    }
}

const emp = new Employee(3, 'Kir', 'Developer');

console.log(emp.name, emp.register());

// Generics.

// example I
function getArray(items: any[]): any[] {
    return new Array().concat(items);
}

let numArray = getArray([1, 3, 5, 7]);
let strArray = getArray(['Brad', 'John', 'Jill', 'Steve']);

numArray.push('Hector');

// example II
function getArrayGenerics<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numArrayGenerics = getArrayGenerics<number>([1, 3, 5, 7]);
let strArrayGenerics = getArrayGenerics<string>(['Brad', 'John', 'Jill', 'Steve']);

// numArrayGenerics.push('Hector'); // Argument of type 'string' is not assignable to parameter of type 'number'.













