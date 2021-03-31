class Rectangle {
  constructor(width,height){
       this.width=width;
       this.height=height;
  }
  getArea()
  {
  console.log(this.width*this.height);
  }
}


   var Rect = new Rectangle(100,100)
   Rect.height=500;
   Rect.getArea();
