interface Flyable {
    fly(howHigh: number);
    land();
}

interface Swimmable {
    swim(howFar: number);
}

// Класс может реализовывать более одного интерфейса, поэтому давайте убедимся,что наш класс реализует эти два.

class Car316 implements MotorVehicle, Flyable, Swimmable {
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

    land() {
        console.log(`Do something`); 
    }

    swim(howFar: number): void {
        console.log(`The car can swim`);
    }
}