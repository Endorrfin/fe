
// SECTION I
const someName: any = undefined;

const ten: number = 10;
const negative: number = -10000;
const decimal: number = 10.00000001;

const yes: boolean = true;

const nothingHere: null = null;
const noDefinition: undefined = undefined;

// SECTION II
let myName: string

if (1 === 1) {
    myName = 'stephen'
} else {
    myName = 'lakdjlakdsjf'
}

// SECTION III
// const sentence = 'This is a sentence';
// sentence.includes('is');

// SECTION IV
// const add = (a: number, b: number): number => {
//     return a + b
// }

// const joinStrings = (a: string, b:string): string => {
//     return a + b;
// }

// function add (a: number, b: number): number {
//     return a + b;
// }

// const joinString = function (a: string, b: string): string {
//     if (10 / 10 === 1) {
//
//     } else if (true) {
//         return 'aaaa'
//         if (10 / 10 === 1) {
//             if (10 / 10 === 1) {
//                 return 'bbbb'
//             } else if (true) {
//                 if (10 / 10 === 1) {
//                     return 'cccc'
//                 } else if (true) {
//
//                 }
//             }
//         }
//     }
// }

// SECTION V

// interface PostGatekeeper {
//     title: string;
//     daysOld: number;
//     published: boolean;
// }

// const post: {title: string, daysOld: number, published: true} = {
//     title: 'Latest Typescript News',
//     daysOld: 10,
//     published: true
// }

// const printPost = (postToPrint: PostGatekeeper) => {
//     return `${postToPrint.title} (${postToPrint.daysOld} days old)`;
// }

// SECTION VI CLASSES
// class Car {
//     color: string;
//     year: number
//
//     constructor(color: string, year: number) {
//         this.color = color;
//         this.year = year;
//     }
//
//     drive() {
//         console.log('Vroom');
//     }
// }

// const myCar = new Car('red', 2000);
// myCar.drive();
//
// console.log(myCar.color, myCar.year) // 'red', 2000
// console.log(myCar.year) // undefined


// ========== INTERFACES I ==========
// interface Drivable {
//     speed: number;
//     drive(): string
// }
//
// class Car implements Drivable{
//     speed = 10;
//
//     drive() {
//         return (`I am driving at ${this.speed}`);
//     }
// }
//
// const newCar = new Car();
//
// const startDriving = (vehicle: Drivable) => {
//     vehicle.drive()
// }
//
// startDriving(myCar)



// ========== INTERFACES II ==========
// class NumberHolder {
//     value: number;
// }
//
// class StringHolder {
//     value: string;
// }
//
// class BooleanHolder {
//     value: boolean;
// }
//
// const numberHolder = new NumberHolder();
// numberHolder.value = 10;
//
// const stringHolder = new StringHolder();
// stringHolder.value = 'A String';
//
// const booleanHolder = new BooleanHolder();
// booleanHolder.value = false


// ========== GENERIC I ==========
// class ValueHolder<TypeForValueProperty> { //<T>
//     value: TypeForValueProperty; // <T>
// }
//
// const numberHolder2 = new ValueHolder<number>();
// numberHolder2.value;
//
// new ValueHolder<string>();
// new ValueHolder<boolean>();


// ========== GENERIC II ==========
// class ValueHolder<T> {
//     value: T;
// };
//
// const numberWrapper = (value: number): number[] => {
//     return [value];
// };
//
// const stringWrapper = (value: string): string[] => {
//     return [value];
// };
//
// const booleanWrapper = (value: boolean): boolean[] => {
//     return [value];
// };
//
// const valueWrapper = <T>(value: T): T[] => {
//     return [value]
// };
//
// valueWrapper<number>(10);
// valueWrapper<boolean>(true);
// valueWrapper<string>('KvN');








































