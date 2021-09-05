class Product311 {
    id: number;
    description: string;


    constructor(); // Объявление конструктора без агрументов.
    constructor(id: number); // Объявление конструктора с одним аргументом
    constructor(id: number, description: string) // Объявление конструктора с двумя аргументами
    constructor(id?: number, description?: string) { // Реализация конструктора обрабатывающего все возможные аргументы

    }
}