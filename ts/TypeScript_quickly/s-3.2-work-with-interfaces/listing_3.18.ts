class SecretServiceCar318 implements MotorVehicle, Flyable, Swimmable {
    startEngine(): boolean {
        return true;
    }

    stopEngine(): boolean {
        return true;
    }

    brake(): boolean {
        return true;
    }

    accelerate(speed: number): void {
      console.log(`Driving faster`);  
    }
    
    honk(howLong: number): void {
        console.log(`Beep beep yeah!`); 
    }

    fly(howHigh: number): void {
        console.log(`The car can fly`);
    }

    land(): void {
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