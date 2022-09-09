class Triangle {
    constructor(a,b,c) {
        console.log('INSIDE TRIANGLE CONSTRUCTOR');
        for(let side of [a,b,c]){
            if(!Number.isFinite(side) || side <=0) { 
                throw new Error('NOT A VALID SIDE NUMBER');
            };
        };
        this.a = a;
        this.b = b;
        this.c = c;
    };
    greet() {
        console.log('HELLO FROM TRIANGLE');
    };
    display() {
        return `Triangle with sides of ${this.a}, ${this.b}, and ${this.c}`;
    };
    getArea() {
        const {a,b,c} = this;
        const s = (a + b + c) / 2;
        return Math.sqrt(s*(s-a)*(s-b)*(s-c));
    };
    isBig() {
        return this.getArea() > 50;
    };
};

class RightTriangle extends Triangle {
    constructor(a,b,c) {
        console.log('INSIDE RIGHT TRIANGLE CONSTRUCTOR');
        if(a*a + b*b !== c*c) {
            throw new Error('Invalid C side for right triangle');
        }
        super(a,b,c);
    };
    display() {
       return "Right " +  super.display()
    };
};