
interface ProductProperties { // Интерфейс ProductProperties c двумя опциональными свойствами
    id?: number;
    description?: string;
}


class Product312 {
    id: number;
    description: string;

    constructor(properties?: ProductProperties) { // Конструктор класса с опциональными аргументами типа ProductProperties

    }
}