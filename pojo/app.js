const add = (x,y) => x+y;
const mult =(x,y) => x*y;
const square =(x) => x*x;
const power = (x,y) => x**y;

// const myMath = {};
// myMath.add = add;
// myMath.mult = mult;

// const myMath ={add,mult,square,power};

// const myMath = {
//     add: (x,y) => {
//         return x+y;
//     },
//     mult: (x,y) => {
//         return x*y;
//     }
// }

const myMath = {
    add(x,y) {
        return x+y;
    },
    square(x) {
        return x*x;
    }
}

function getHypotenuse(a,b) {
    return Math.sqrt(a**2 + b**2);
}
function getArea(a,b) {
    return a*b/2;
}

const rightTriangle = {
    a:9,
    b:12,
    getArea(){
        return this.a * this.b /2;
    },
    getHypotenuse() {
        return Math.sqrt(this.a **2 + this.b **2);
    }
}

function Triangle(a,b){
    this.a = a;
    this.b = b;
    this.getArea = function() {
        return this.a * this.b /2;
    };
    this.getHypotenuse = function() {
        return Math.sqrt(this.a**2 + this.b**2);
    }
}


