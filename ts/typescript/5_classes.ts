
class Typescript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `[${name}]: Typescript version is ${this.version}`
    }
}

// Option I
// class Car {
//     readonly model: string
//     readonly numberOfWheels: number = 4
//
//     constructor(theModel: string) {
//         this.model = theModel
//     }
// }


// Option II
class Car {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string) {
    }
}

class Animal {
    protected voice: string = ''
    public color: string = 'black'

    private go() {
        console.log('Go')
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat()
cat.setVoice('test')
console.log(cat.color)



/*
Abstract classes
Они нужны на этапе разработки, чтобы, от них наследоваться.
Существуют также и абстрактные методы.
 */

abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render(): void {
        console.log('Component on render')
    }

    info(): string {
        return 'This is info';
    }
}














