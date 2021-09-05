interface Flyable extends MotorVehicle { // Один интерфейс расширяет другой
    fly(howHigh: number)
        land();
}

/* 
Теперь если класс включит в свое объявление implements Flyable , то должен
будет реализовать пять методов, объявленных в интерфейсе MotorVehicle (см.
листинг 3.13) наряду с двумя методами из Flyable (листинг 3.19), — итого семь
методов. Наш класс SecretServiceCar должен реализовать эти семь методов
плюс один из Swimmable.
*/