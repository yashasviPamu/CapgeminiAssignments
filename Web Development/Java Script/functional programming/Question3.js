function isEven(num) { return(num%2 == 0); }
function find(arr,isEven)
{
	let array=[]
	for(var i=0;i<arr.length;i++)
    {
       if(isEven(arr[i])==true)
       {
          array.push(arr[i]);
       }
    }
    return array[0];
}
let arr=[1, 3, 5, 4, 2]
console.log(find(arr,isEven))