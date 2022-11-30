class Person{
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email){
        this.firstName=firstName;
        this.lastName=lastName;
        this.address=address;
        this.city=city;
        this.state=state;
        this.zip=zip;
        this.phoneNumber=phoneNumber;
        this.email=email;
    }
    getDetails(){
        return (`First Name: ${this.firstName} \nLast Name: ${this.firstName}\nAddress: ${this.address}\nCity : ${this.city}
        \nState : ${this.state}\nZip : ${this.zip}\nPhone Number : ${this.phoneNumber}\nEmail ID: ${this.email}`)
    }
}

let Prem = new Person('Prem','Kumbhar','Kolhapur','Kolhapur','Maharashtra','416001','7350447788','premkumbhar7@.com');
let Prathmesh = new Person('Prathmesh','Kumbhar',' Pune','Pune','Maharashtra','411011','7744969900','prathmeshk10@.com');
console.log(Prem);
console.log(Prathmesh);

