interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
}

const rect2: Rect = {
    id: '1234',
    size: {
        width: 10,
        height: 5
    }
}

rect2.color = 'black'

// Мы можем указывать к какому типу будет отноститься объект.
const rect3 = {} as Rect
const rect4 = <Rect>{}


// === === === Наследование интерфейсов === === ===
interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '123',
    size: {
        width: 30,
        height: 40
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}

// === === === интерфейсы могут взаимодействовать с классами === === ===
interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date): void {
        this.time = date
    }
}


// === === === Создаем интерфейс для объекта у которого будет большое количество динамических ключей === === ===
interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}














