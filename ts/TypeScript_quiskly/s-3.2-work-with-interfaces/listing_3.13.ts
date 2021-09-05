interface MotorVehicle { // Объявляет сигнатуру метода, который должен быть реализован классом
    startEngine(): boolean;
    stopEngine(): boolean;
    brake(): boolean;
    accelerate(speed: number): void;
    honk(howLong: number): void;
}


// Class 'Car' incorrectly implements interface 'MotorVehicle'.
// Type 'Car' is missing the following properties from type 'MotorVehicle': startEngine, stopEngine, brake, accelerate, honk
// class Car implements MotorVehicle {}
