class Rectangle {
    constructor(name, width, height) {
        this.name = name;
        this.width = width;
        this.height = height;
    }

    area() {
        return this.height * this.width;
    }


    perimeter() {
        return 2 * (this.width + this.height)
    }

    isSquare () {
        return this.width === this.height;
    }


    logArea() {
        console.log('Rectangle Area' + this.area ())
    }
}

const square = new Rectangle('Square', 20, 20);
const rectangle = new Rectangle('Square', 30, 20);

console.log("Square");

console.log(square.area());
console.log(square.perimeter());
console.log(square.isSquare());
square.logArea();
console.log(square);

console.log("Rectangle");
console.log(rectangle.area());
console.log(rectangle.perimeter());
console.log(rectangle.isSquare());
rectangle.logArea();
console.log(rectangle);
console.log(rectangle);