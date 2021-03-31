Rectangle.prototype.calcArea = function calcArea() {
  return this.height * this.width
}

let rec1=new Rectangle(5,8);
console.log('Area of Rectangle with width & height (5,8)='+rec1.calcArea());