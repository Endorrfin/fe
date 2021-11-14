

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















