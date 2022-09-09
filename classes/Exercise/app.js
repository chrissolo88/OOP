class Vehicle {
    constructor(a,b,c){
        this.make = a;
        this.model = b;
        this.year = c;
    };

    honk(){
        return 'BEEP';
    };
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
    };
};

class Car extends Vehicle {
    constructor(a,b,c){
        super(a,b,c);
        this.numWheels = 4;
    };
};

class Motorcycle extends Vehicle {
    constructor(a,b,c){
        super(a,b,c);
        this.numWheels = 2;
    };
    revEngine(){
        return 'VROOOM';
    };
};

class Garage {
    constructor(a){
        this.vehicles = [];
        this.capacity = a;
    };
    add(obj){
        if(!(obj instanceof Vehicle)){
            throw new Error("ONLY VEHICLES IN HERE!");
        };
        if(this.vehicles.length >= this.capacity) {
            throw new Error("NO SPACE FOR YOU!");
        };
        this.vehicles.push(obj);
        return "PARKED!";
    };
};
