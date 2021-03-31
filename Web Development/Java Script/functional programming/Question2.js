function square(x) { return(x*x); }
function double(x) { return(x*2); }
function compose(f1,f2,x)
{
	return f1(f2(x));
}

var f1=compose(square,double,5);
var f2=compose(double,square,5);
console.log("f1=compose(square,double,5)= "+f1);
console.log("f2=compose(double,square,5)= "+f2);