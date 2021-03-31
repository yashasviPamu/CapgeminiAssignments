function person(fname, lname, age, skills, dateofbirth, address, married, profession)
{
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.skills = skills;
    this.dateofbirth = dateofbirth;
    this.address = address;
    this.married = married;
    this.profession = profession;
}
person1=new person("Naga","Sai",22,"c","2/1/1999",{city:"hyderabad",pincode:"500060"},"false","analyst");
person2=new person("Chinmay","Goud",27,"HTML","8/12/1993",{city:"Ameerpet",pincode:"500038"},"false","Sr Cloud Engineer");

print=function()
{
 console.log(person1);
 console.log(person2);
}();
