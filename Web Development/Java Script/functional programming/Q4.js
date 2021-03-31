const find = (arr, func) => () => {
    for (i = 0; i < arr.length; i++) {
      if (func(arr[i])) {
        return arr[i];
      }
      continue;
    }
  };
  
  function isEven(num) {
    return num % 2 == 0;
  }
  const result = find([1, 3, 5, 4, 2], isEven);
  
  console.log(result());
