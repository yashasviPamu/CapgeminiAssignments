//a
let arr: number[] = [11, 22, 33, 44];

let [aa, bb, cc, dd] = arr;

console.log(cc);

//b
let personaddress = {
  name: "Doug",
  address: {
    city: "City",
    country: "Alaska",
    pin: 100001,
  },
};

let {
  address: { pin },
} = personaddress;

console.log(pin);
