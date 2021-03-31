function square(x) { return(x*x); }
function map(arr,fun)
{
	let array=[]
	for(var i=0;i<arr.length;i++)
	{
		array.push(fun(arr[i]));
	}
	return array;
}
let array1=[1, 2, 3, 4, 5];
let array2=[1, 4, 9, 16, 25];
console.log("map([1, 2, 3, 4, 5], square)= ["+map(array1,square)+"]");
console.log("map([1, 4, 9, 16, 25], Math.sqrt)= ["+map(array2,Math.sqrt)+"]");