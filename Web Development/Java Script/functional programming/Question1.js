function square(x) { return(x*x); }
function double(x) { return(x*2); }
function composedValue(square,double,i)
{
	return square(double(i));
}

console.log("composedValue(square,double,5)= "+composedValue(square,double,5));