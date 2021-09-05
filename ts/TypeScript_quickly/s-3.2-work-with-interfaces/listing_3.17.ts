class SecretServiceCar extends Car314 implements Flyable, Swimmable {

    fly(howHigh: number): void {
        console.log(`The car can fly`);
    }

    land() {
        console.log(`Do something`); 
    }

    swim(howFar: number): void {
        console.log(`The car can swim`);
    }
}

/*
Реализуя все методы, объявленные в Flyable и Swimmable , наш класс
SecretServiceCar превращает обычный автомобиль в летающе-плавающий
объект. Класс Car при этом продолжает представлять обычный авто с функцио­
нальностью, объявленной в интерфейсе MotorVehicle.
*/