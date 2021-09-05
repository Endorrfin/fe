class SecretServiceCar320 implements Flyable, Swimmable {

    // Реализует метод из MotorVehicle
    startEngine(): boolean {
        return true;
    };

    stopEngine(): boolean {
        return true;
    };

    brake(): boolean {
        return true;
    };

    accelerate(speed: number) {
        console.log(`Driving faster`);
    }

    honk(howLong: number): void {
        console.log(`Beep beep yeah!`);
    }

    // Реализует метод из Flyable
    fly(howHigh: number) {
        console.log(`Flying ${howHigh} feet high`);
    }

    land(): void {
        console.log(`Landing. Fasten your belts.`);
        }

    // Реализует метод из Swimmable
    swim(howFar: number) {
        console.log(`Swimming ${howFar} feet`);
        
    }
}