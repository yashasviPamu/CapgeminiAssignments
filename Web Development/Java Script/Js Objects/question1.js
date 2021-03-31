class Rectangle {
constructor(height, width) {
    this.height = height
    this.width = width
  }

getwidth()
{
    console.log('width : '+this.width);
}
getheight()
{
    console.log('height : '+this.height);
}

}

let rec=new Rectangle(5,4);
console.log('Previous width & height: ');
rec.getwidth();
rec.getheight();

rec.height=8;
rec.width=7;

console.log('Changed width & height: ');
rec.getwidth();
rec.getheight();