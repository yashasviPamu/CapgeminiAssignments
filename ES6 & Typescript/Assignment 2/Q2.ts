let lowNumber = 10;
console.log("Armstrong Numbers:");
function armstong() {
  for (let i = lowNumber; i > 0; i++) {
    let numberOfDigits = i.toString().length;

    let sum = 0;

    let temp = i.toString();

    for (let char of temp) {
      sum += Math.pow(parseInt(char), numberOfDigits);
    }
    if (sum == i) {
      console.log(i);
      lowNumber = i;
      break;
    }
  }
}

function getNextArmstrong() {
  lowNumber++;
  armstong();
}

armstong();
getNextArmstrong();
getNextArmstrong();
getNextArmstrong();
getNextArmstrong();
