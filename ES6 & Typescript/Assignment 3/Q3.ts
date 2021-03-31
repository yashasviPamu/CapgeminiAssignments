interface Printable {
  print: () => string;
}

let circle: Printable = {
  print: (): string => {
    return "This is a Circle";
  },
};

let employee: Printable = {
  print: (): string => {
    return "This is an Employee";
  },
};

function printAll(obj1: Printable, obj2: Printable) {
  console.log(obj1.print());
  console.log(obj2.print());
}

printAll(circle, employee);
