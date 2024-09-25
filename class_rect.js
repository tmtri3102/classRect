class Rectangle {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}
	area() {
		return this.width * this.height;
	}
	perimeter() {
		return 2 * (this.width + this.height);
	}
}

let rectangle = new Rectangle(200, 100);

let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

ctx.fillStyle = "red";
ctx.fillRect(0, 0, rectangle.width, rectangle.height);
