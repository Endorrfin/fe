interface MotorVehicle { // Объявляет сигнатуру метода, который должен быть реализован классом
    startEngine(): boolean;
    stopEngine(): boolean;
    brake(): boolean;
    accelerate(speed: number): void;
    honk(howLong: number): void;
}


class Car314 implements MotorVehicle { // Класс, реализующий MotorVehicle
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
    
}

// Option I
const car = new Car314(); // Инстанцируем класс Carr
// Option II 
const car2: Car314 = new Car314();
// Option III 
const car3: MotorVehicle = new Car314();
car.startEngine(); // Использует API Car, чтобы запустить двигатель

console.log(car.stopEngine());

/*
В чем разница между этими двумя объявлениями константы car ? Предположим,
что класс Car реализует восемь методов: пять из них берутся из интерфейса
MotorVehicle , а остальные просто произвольны. Если константа car имеет тип
Car , вы можете вызвать все восемь методов для экземпляра объекта, представ-
ленного car . Но если car имеет тип MotorVehicle , то с помощью константы car
возможно вызвать только пять методов, объявленных в этом интерфейсе.
*/

// интерфейс обеспечивает выполнение определенного контракта.

