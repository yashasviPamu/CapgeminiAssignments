function person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

let name=new person("Yashasvi","Pamu");
console.log("FirstName: "+name.firstName);
console.log("LastName: "+name.lastName);
name.lastName="Yaah! Worked";
console.log("LastName: "+name.lastName);
